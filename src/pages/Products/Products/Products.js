import React from "react";
import Product from "../Product/Product";
import useProducts from "../../../hooks/useProducts";

const Products = () => {
  const [products] = useProducts();

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl my-14 text-center">Tools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5 mx-5 sm:mx-0 lg:mx-8">
        {products?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
