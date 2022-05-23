import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, image, minOrder, price, description, quantity } = product;
  return (
    <div class="card card-compact  w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>available quantity: {quantity}</p>

        <p>minimum order quantity: {minOrder}</p>
        <p>price: ${price} (per unit price)</p>
        <p>{description}</p>
        <div class="card-actions justify-center">
          <Link class="btn btn-primary" to={`/purchase/${_id}`}>Place Order</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
