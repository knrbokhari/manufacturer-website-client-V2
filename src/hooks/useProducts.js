import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, seProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const rsc = await fetch("http://localhost:5000/product");
      const data = await rsc.json();
      seProducts(data);
    };

    fetchProduct();
  }, [products]);
  return [products];
};

export default useProducts;
