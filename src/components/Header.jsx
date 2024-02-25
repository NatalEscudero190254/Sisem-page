import React from "react";
import Logosisem from "../assets/Sisem-logook1.svg";
import Button from "./Button";
import MenuIcon from "./Icons/MenuIcon";

const Header = () => {
  return (
    <header className="flex justify-around text-center items-center w-full p-8 px-10 border border-transparent shadow-md fixed bg-white z-30">
      <a href="">
        <img src={Logosisem} alt="" className="w-30 max-w-20" loading="lazy" />
      </a>
      <nav className="flex flex-row gap-16 decoration-0 text-sm font-semibold text-pretty tracking-widest">
        <a href="#" className="hover:text-blue-700 ">
          SOLUCIONES
        </a>

        <a href="#" className="hover:text-blue-700 ">
          NOSOTROS
        </a>

        <a href="#" className="hover:text-blue-700 ">
          BLOG
        </a>

        <a href="#" className="hover:text-blue-700 ">
          CONTACTO
        </a>
      </nav>
      <div className="flex flex-row gap-10 items-center justify-center">
        <Button content={"SOLICITAR DEMO"} background={"bg-blue-700"} />
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
