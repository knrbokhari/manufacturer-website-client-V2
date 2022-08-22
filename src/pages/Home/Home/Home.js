import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Reviews from "../Reviews/Reviews";
import useProducts from "../../../hooks/useProducts";
import Product from "../../Products/Product/Product";
import Welcome from "../Welcome/Welcome";
import WhyUS from "../WhyUs/WhyUS";

const Home = () => {
  const [products] = useProducts();
  return (
    <div>
      <Banner></Banner>
      <Welcome />
      <div className="container mx-auto my-14">
        <h2 className="text-5xl text-center mb-14">Tools</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5 mx-5 sm:mx-0 lg:mx-8">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
      <BusinessSummary />
      <WhyUS />
      <Reviews />
    </div>
  );
};

export default Home;
