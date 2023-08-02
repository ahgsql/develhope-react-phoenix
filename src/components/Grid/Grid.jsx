import React from "react";
import Button from "../common/Button";
import "./grid.css";
import Card from "./Card";
import GradientText from "./GradientText";
import SizedBox from "../common/SizedBox";

export default function Grid() {
  const card1 = {
    type: "gradient",
    value: "linear-gradient(350.65deg, #35479f -9.32%, #9528ea 113.71%)",
  };
  const card2 = {
    type: "image",
    value:
      "https://prium.github.io/phoenix/v1.13.0/assets/img/e-commerce/gift-items-banner-bg.png",
  };
  const card3 = {
    type: "gradient",
    value: "linear-gradient(140deg, royalblue, cyan",
  };
  return (
    <section className="grid-container">
      <Card flexDirection="row" featured={true} bg={card1} key={1}>
        <div>
          <span
            className="featured-text"
            style={{ color: "#ffcc85", fontWeight: "800" }}
          >
            Whooping
            <GradientText
              text=" 60% "
              color1="beige"
              color2="pink"
              degree={30}
              fontSize={55}
            />
            Off <br /> on everyday items
          </span>
          <Button radius={40} bgColor="#3874ff">
            Shop Now
          </Button>
        </div>
        <img src="https://prium.github.io/phoenix/v1.13.0/assets/img/e-commerce/whooping_banner_product.png" />
      </Card>
      <Card bg={card2} flexDirection={"column"} key={2}>
        <span
          className="card-text"
          style={{ color: "white", fontWeight: "800" }}
        >
          Get{" "}
          <GradientText
            text="10% Off"
            color1="darkcyan"
            color2="cyan"
            degree={180}
            fontSize={35}
          />{" "}
          on gift items
        </span>
        <Button radius={40} bgColor="#3874ff">
          Buy Now
        </Button>
        <SizedBox height={100} />
      </Card>
      <Card bg={card3} key={3}>
        <div>
          <span
            className="card-text"
            style={{ textAlign: "left", fontWeight: "bold" }}
          >
            MI 11 Pro <br />
            Best in the market
          </span>
          <Button radius={40} bgColor="#3874ff">
            Buy Now
          </Button>
        </div>
        <img src="https://prium.github.io/phoenix/v1.13.0/assets/img/e-commerce/5.png" />
      </Card>
    </section>
  );
}
