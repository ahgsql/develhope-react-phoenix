import products from "../../data/products.js";
import "./product.css";
import Carousel from "./Carousel.jsx";
import { useEffect, useState } from "react";

const Products = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  let products1;
  let products2;
  let products3;
  let ads = true;

  if (screenWidth >= 1200) {
    products1 = products.slice(0, 10);
    products2 = products.slice(6, 12);
    products3 = products.slice(12, 18);
  } else if (screenWidth >= 990) {
    products1 = products.slice(0, 4);
    products2 = products.slice(6, 11);
    products3 = products.slice(12, 17);
  } else if (screenWidth >= 768) {
    products1 = products.slice(0, 4);
    products2 = products.slice(6, 10);
    products3 = products.slice(12, 16);
    ads = false;
  } else if (screenWidth >= 575) {
    products1 = products.slice(0, 3);
    products2 = products.slice(6, 9);
    products3 = products.slice(12, 15);
    ads = false;
  } else if (screenWidth >= 450) {
    products1 = products.slice(0, 2);
    products2 = products.slice(6, 8);
    products3 = products.slice(12, 14);
    ads = false;
  } else {
    products1 = products.slice(0, 1);
    products2 = products.slice(6, 7);
    products3 = products.slice(12, 13);
    ads = false;
  }

  return (
    <>
      <Carousel
        products={products1}
        isTop={true}
        header="Top Deals today"
        ads={ads}
      />
      <Carousel
        products={products2}
        isTop={false}
        header="Top Electronics"
        ads={ads}
      />
      <Carousel
        products={products3}
        isTop={false}
        header="Best Offers"
        ads={ads}
      />
    </>
  );
};

export default Products;
