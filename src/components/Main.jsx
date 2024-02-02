import React from "react";
import pioneros from "../assets/pioneros-2.jpg";

const Main = ({ title, description }) => {
  return (
    <section>
      <div className="flex justify-end">
        <div className="absolute z-10 w-full h-[643px] bg-gradient-to-b from-transparent from-40% via-black/50 to-black"></div>
        <div className="flex flex-col justify-center items-center z-20">
          <h2 className="dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10 ">
            {title}
          </h2>
          {/* <p className="text-3xl font-semibold text-sky-200/80 -">
          {description}
        </p> */}
        </div>
        <img
          src={pioneros}
          alt="Imagen de pioneros en legaltech"
          className="absolute -z-10"
        />
      </div>
    </section>
  );
};

export default Main;
