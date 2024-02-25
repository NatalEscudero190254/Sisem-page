import React from "react";
import logo_firma from "../assets/logo_firma.jpg";

const Footer = () => {
  return (
    <footer className="h-[597px] bg-black/90 flex flex-col justify-center items-center gap-20 ">
      <div className="flex flex-row gap-36">
        <div>
          <img
            src={logo_firma}
            alt="logo firma sisem"
            className="w-[280px] h-[150px] "
          />
        </div>
        <div className="text-white flex flex-col gap-10 w-[250px]">
          <p className="text-pretty text-sm">
            <span className="font-bold">
              Sisem Soluciones de Información S.A.
            </span>{" "}
            <br />
            Av. J.A. Roca 590 2do piso (C1067ABN) <br />
            Ciudad de Buenos Aires, Argentina <br /> +54 11 7078-7473
          </p>
          <p className=" text-white/40 text-xs ">
            Nuestra esencia: Misión y Visión Nuestros Valores
          </p>
          <p className=" text-white/40 text-xs ">
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
            type="number"
            placeholder="Telefono"
            className="py-3 px-2 broder rounded-md text-xs font-semibold"
          />
          <input
            type="text"
            placeholder="Mensaje"
            className="py-3 px-2 pb-16 broder rounded-md text-xs font-semibold"
          />
          <input
            type="submit"
            className="bg-blue-500 rounded-md w-20 py-2 text-white lowercase font-semibold text-sm hover:cursor-pointer hover:bg-blue-600 text-center items-center"
          />
        </form>
      </div>

      <div className="flex flex-row gap-28 text-white text-pretty font-semibold tracking-widest">
        <a href="https://www.facebook.com/profile.php?id=100083492798928">
          Facebook
        </a>
        <a href="https://www.linkedin.com/company/sisem-soluciones-de-informacion-s-a-/mycompany/?viewAsMember=true%20">
          LinkedIn
        </a>
        <a href="https://www.youtube.com/channel/UC1o3txybE_d0IJxhctNVqrw">
          Youtube
        </a>
        <a href="https://www.instagram.com/sisem_net/">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
