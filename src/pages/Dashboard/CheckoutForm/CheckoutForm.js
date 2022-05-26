import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ data: order, stripePromise }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate()

    const { _id, totalPrices, name, email } = order;
    //   console.log(order);

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ price: totalPrices }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data?.clientSecret)

                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [totalPrices]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardError(error?.message || "");
        setSuccess("");
        setProcessing(true);

        // confirm card payment
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            });

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError("");
            setTransactionId(paymentIntent.id);
            // console.log(paymentIntent);
            setSuccess("Congrats! Your payment is completed.");

            //store payment on database
            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
            };
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    setProcessing(false);
                    console.log(data);
                    navigate('/dashboard')
                });
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-success btn-sm mt-4"
                    type="submit"
                    disabled={!stripe || !clientSecret || success}
                >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
            {success && (
                <div className="text-green-500">
                    <p>{success} </p>
                    <p>
                        Your transaction Id:{" "}
                        <span className="text-orange-500 font-bold">{transactionId}</span>{" "}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;