import React from "react";

const CardItem = ({ img }) => {
  return (
    <a href="">
      <img src={img} alt="" loading="lazy" />
    </a>
  );
};

export default CardItem;
