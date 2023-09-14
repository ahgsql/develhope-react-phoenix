import products from "../../data/products.js";
import "./product.css";
import Carousel from "../Products/Carousel.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllProducts } from "../../hooks/getProduct.js";
import categories from "./categorydata";
const CategoryPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [products, setProducts] = useState([]);
  const { pathname } = useLocation();
  let activeShortUrl = pathname.split("/").pop();
  let pageTitle = categories.filter((c) => c.shortUrl === activeShortUrl)[0]
    .title;
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    (async () => {
      let prod = await getAllProducts();

      setProducts(prod.sort((a, b) => 0.5 - Math.random()));
    })();
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [activeShortUrl]);

  let products1;
  let products2;
  let products3;
  let ads = true;

  if (screenWidth >= 1200) {
    products1 = products.slice(0, 6);
    products2 = products.slice(6, 12);
    products3 = products.slice(12, 18);
  } else if (screenWidth >= 990) {
    products1 = products.slice(0, 5);
    products2 = products.slice(6, 11);
    products3 = products.slice(12, 17);
  } else if (screenWidth >= 768) {
    products1 = products.slice(0, 5);
    products2 = products.slice(6, 10);
    products3 = products.slice(12, 16);
    ads = false;
  } else if (screenWidth >= 575) {
    products1 = products.slice(0, 4);
    products2 = products.slice(6, 9);
    products3 = products.slice(12, 15);
    ads = false;
  } else if (screenWidth >= 450) {
    products1 = products.slice(0, 3);
    products2 = products.slice(6, 8);
    products3 = products.slice(12, 14);
    ads = false;
  } else {
    products1 = products.slice(0, 2);
    products2 = products.slice(6, 7);
    products3 = products.slice(12, 13);
    ads = false;
  }

  return (
    <>
      <Carousel
        products={products1}
        isTop={false}
        header={"Best Products in " + pageTitle + " Category"}
      />
      <br />
      <br />
      <br />
      <Carousel products={products2} isTop={false} ads={ads} /> <br />
      <br />
      <br />
      <Carousel products={products3} isTop={false} ads={ads} />
    </>
  );
};

export default CategoryPage;
