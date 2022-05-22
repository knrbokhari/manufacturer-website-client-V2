import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, seProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const rsc = await fetch("product.json");
      const data = await rsc.json();
      seProducts(data);
    };

    fetchProduct();
  }, []);
  return [products];
};

export default useProducts;
