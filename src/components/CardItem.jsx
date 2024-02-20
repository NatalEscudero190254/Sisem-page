import React from "react";

const CardItem = ({ img }) => {
  return (
    <div className=" w-[400px] h-[400px]   ">
      <img src={img} alt="Services images" loading="lazy" />
    </div>
  );
};

export default CardItem;
