import React from "react";
import Banner from "../components/Home/Banner";
import BusinessSummary from "../components/Home/BusinessSummary";
import useProducts from "../hooks/useProducts";

const Home = () => {
  const [products] = useProducts();
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto my-14">
        <h2 className="text-5xl text-center mb-14">Tools</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5 mx-5 sm:mx-0 lg:mx-8">
          {products.slice(0, 6).map(product =>
          (<div class="card card-compact  w-full bg-base-100 shadow-xl">
            <figure>
              <img src={product.image} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{product.name}</h2>
              <p>available quantity: {product.quantity}</p>
              <p>minimum order quantity: {product.minOrder}</p>
              <p>price: ${product.price} (per unit price)</p>
              <p>{product.description.slice(0, 95)}</p>
              <div class="card-actions justify-center">
                <button class="btn btn-primary">Place Order</button>
              </div>
            </div>
          </div>))}
        </div>
      </div>
      <BusinessSummary />
    </div>
  );
};

export default Home;
