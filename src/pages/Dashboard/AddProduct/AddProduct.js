import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const imageStorageKey = "78f4ba72d703ea5f83062479e9d4d80f";

    const onSubmit = async (data) => {
        const formData = new FormData();
        const image = data.image[0];
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const photo = result.data.url;
                    const product = {
                        name: data.productName,
                        image: photo,
                        minOrder: data.minOrderQuantity,
                        price: data.price,
                        quantity: data.availableQuantity,
                        description: data.description
                    }
                    fetch(`https://warm-brook-08565.herokuapp.com/product/`, {
                        method: "post",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                        body: JSON.stringify(product),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            if (result.acknowledged) {
                                alert("added successfully");
                                reset();
                                navigate('/dashboard/manageproduct')
                            } else {
                                alert("Failed to add profile");
                            }
                        });

                }
            })
    }

    return (
        <div className='container mx-auto' >
            <h2 className='text-center text-2xl mb-10 mt-3'>Add Product</h2>
            <div className="card max-w-3xl mx-auto bg-base-100 shadow-xl">
                <div className="card-body border">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                className="block w-full text-lg input-group text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is Required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.image.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full"
                                    {...register("productName", {
                                        required: {
                                            value: true,
                                            message: "Product Name is Required",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.productName?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.productName.message}
                                        </span>
                                    )}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Price"
                                    className="input input-bordered w-full"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: "Price is Required",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.Price?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.Price.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full"
                                {...register("availableQuantity", {
                                    required: {
                                        value: true,
                                        message: "Available Quantity is Required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.availableQuantity?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.availableQuantity.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Minimum Order Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum Order Quantity"
                                className="input input-bordered w-full"
                                {...register("minOrderQuantity", {
                                    required: {
                                        value: true,
                                        message: "Minimum Order Quantity is Required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.minOrderQuantity?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.minOrderQuantity.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Description"
                                className="textarea textarea-bordered w-full"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "description is Required",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.description.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        <input
                            className="btn w-56 mx-auto block mt-4 text-white"
                            type="submit"
                            value="Send"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;