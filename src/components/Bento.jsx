import React from "react";

const Bento = ({ title, descripcion, img, className }) => {
  return (
    <article className={className}>
      <div className="flex flex-col p-6">
        <h3>{title}</h3>
        <p> {descripcion} </p>
      </div>
      <img src={img} alt="Services Image" loading="lazy" className=" " />
    </article>
  );
};

export default Bento;
