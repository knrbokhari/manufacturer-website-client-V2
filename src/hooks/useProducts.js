import { useEffect, useState } from "react";

const useProducts = () => {
  const [call, setCall] = useState(false);
  const [products, seProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const rsc = await fetch(
        "https://blooming-fortress-19640.herokuapp.com/product"
      );
      const data = await rsc.json();
      seProducts(data);
    };
    fetchProduct();
    setCall(false);
  }, [call]);

  return [
    products,
    (value) => {
      setCall(value);
    },
  ];
};

export default useProducts;
