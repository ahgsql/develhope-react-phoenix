import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./ProductDetail.css";
import "./BigImages.css";

export default function BigImages({ images }) {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();
  useEffect(() => {}, []);
  return (
    // <div className="product-detail-featured-image ">
    //   <img src={images} />
    // </div>
    <>
      <motion.div className="bi-carousel" ref={carouselRef}>
        <motion.div
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }}
          className="bi-innerCarousel"
        >
          {images.map((image, index) => {
            return (
              <motion.div className="bi-item" key={index}>
                <img
                  src={image}
                  onError={(e) => {
                    e.target.src =
                      "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}
