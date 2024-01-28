import React from "react";
import Logosisem from "../assets/Sisem-logook1.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <nav className="flex flex-row gap-10 decoration-0">
        <a href="">
          <img src={Logosisem} alt="" className="w-30 max-w-20" />
        </a>

        <a href="#">SOLUCIONES</a>

        <a href="#">NOSOTROS</a>

        <a href="#">BLOG</a>

        <a href="#">CONTACTO</a>
      </nav>
    </header>
  );
};

export default Header;
