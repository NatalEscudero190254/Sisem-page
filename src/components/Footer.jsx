import React from "react";
import logo_firma from "../assets/logo_firma.jpg";

const Footer = () => {
  return (
    <footer className="h-[597px] bg-black/90 flex flex-row items-start justify-end gap-20 p-32 ">
      <div>
        <img
          src={logo_firma}
          alt="logo firma sisem"
          className="w-[280px] h-[150px] "
        />
      </div>
      <div className="text-white flex flex-col gap-10 w-[280px]">
        <p>
          Sisem Soluciones de Información S.A. Av. J.A. Roca 590 2do piso
          (C1067ABN) Ciudad de Buenos Aires, Argentina +54 11 7078-7473
        </p>
        <p>Nuestra esencia: Misión y Visión Nuestros Valores</p>
        <p>
          Certificación ISO 9001:2015 <br />
          Política de Integridad y Compliance Política de Privacidad <br />{" "}
          Términos de Uso
        </p>
      </div>

      <form action="" className="flex flex-col gap-6 w-[380px] ">
        <input
          type="text"
          placeholder="Nombre y apellido"
          className="py-3 px-2 broder rounded-md text-xs font-semibold"
        />
        <input
          type="text"
          placeholder="Mail"
          className="py-3 px-2 broder rounded-md text-xs font-semibold"
        />
        <input
          type="text"
          placeholder="Telefono"
          className="py-3 px-2 broder rounded-md text-xs font-semibold"
        />
        <input
          type="text"
          placeholder="Mensaje"
          className="py-3 px-2 broder rounded-md text-xs font-semibold"
        />
      </form>

      <div>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>
    </footer>
  );
};

export default Footer;
