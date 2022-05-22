import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, seProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const rsc = await fetch("https://warm-brook-08565.herokuapp.com/product");
      const data = await rsc.json();
      seProducts(data);
    };

    fetchProduct();
  }, []);
  return [products];
};

export default useProducts;
