import React from "react";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Grid() {
  return (
    <div>
      <Button radius={10} bgColor="#0000ff">
        Buy Now <FontAwesomeIcon icon={faHeart} />
      </Button>
    </div>
  );
}
