import React from "react";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const [products] = useProducts();

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl my-14 text-center">Tools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5 mx-5 sm:mx-0 lg:mx-8">
        {products?.map((product) => (
          <div
            key={product.name}
            class="card card-compact  w-full bg-base-100 shadow-xl"
          >
            <figure>
              <img src={product?.image} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{product?.name}</h2>
              <p>minimum order quantity: {product.minOrder}</p>
              <p>price: ${product.price} (per unit price)</p>
              <p>{product.description}</p>
              <div class="card-actions justify-center">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
