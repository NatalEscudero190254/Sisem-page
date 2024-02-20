import "./App.css";
import Header from "./components/Header";
import pioneros from "./assets/pioneros-2.jpg";
import SocialButton from "./components/SocialButton";
import logobackground from "./assets/Fondo-misce2.png";
import compliance from "./assets/Bento/compliance-roll-1.png";
import corporate from "./assets/Bento/Corporate-services-roll-1.png";
import government from "./assets/Bento/goverment-roll-2.png";
import agreement from "./assets/Bento/legal-agreement-roll-2.png";
import legcorporate from "./assets/Bento/Legal-corporate-roll.png";
import legoperation from "./assets/Bento/Legal-operation-Roll.png";
import CardItem from "./components/CardItem";
import Slide2 from "./assets/slide2.jpg";
import SolTecnologicas from "./assets/sisem-slide.png";

function App() {
  const servicesImages = [
    { img: compliance, id: 1 },
    { img: corporate, id: 2 },
    { img: government, id: 3 },
    { img: agreement, id: 4 },
    { img: legcorporate, id: 5 },
    { img: legoperation, id: 6 },
  ];

  return (
    <>
      <main>
        <Header />
        <section className="w-full mx-auto pb-24 py-60 text-center justify-center">
          {/* <div className="absolute z-10 bottom-0 top-0 w-full h-[760px] bg-gradient-to-b from-transparent from-40% via-black/50 to-black"></div> */}
          <div className="flex flex-col justify-center items-center text-start">
            <h1 className="dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row lg:pb-10 justify-center items-center z-20 text-start tracking-wide mb-10">
              Soluciones tecnologicas <br /> para gestion legal y <br />{" "}
              documental corporativa
            </h1>
          </div>
          <img
            src={SolTecnologicas}
            alt="Imagen pioneros en legal tech"
            className="absolute top-[108px] -bottom-10 left-0 -z-10 "
          />
          <SocialButton
            content={"CONOCENOS"}
            background={"bg-gradient-to-r from-indigo-500 to-sky-300 "}
          />
        </section>

        <section className="w-full mx-auto pb-24 py-40 flex flex-col  items-center">
          <h2 className="text-blue-700 md:text-4xl lg:text-4xl font-bold lg:pb-20 justify-center items-center text-center tracking-wide ">
            Soluciones tecnologicas <br></br>para cada experiencia
          </h2>
          <div className="flex flex-wrap w-full justify-center gap-3">
            {servicesImages?.map((e) => {
              return (
                <a href="" key={e.id}>
                  <CardItem img={e.img} />
                </a>
              );
            })}
          </div>

          <img
            src={logobackground}
            alt="Fondo misce 2"
            className="absolute top-[47rem]"
          />
        </section>

        <section className="h-[100vh]  flex flex-col items-end ">
          <div className="pr-52 pt-20  flex flex-col gap-2  ">
            <h6 className="text-xs font-bold tracking-wide text-pink-500 ">
              PARA CADA HISTORIA PARA CADA RECORRIDO
            </h6>
            <h2 className="text-5xl text-pretty font-bold tracking-wide text-pink-600">
              Ofrecemos diversas <br />
              soluciones que se <br /> adaptan a cada <br /> desafio.
            </h2>
            <SocialButton
              content={"SOLICITAR UN DEMO"}
              background={"bg-gradient-to-r from-indigo-500 to-sky-300 "}
            />
            <p className="text-2xl text-pretty font-bold tracking-wide text-blue-600">
              Conocé nuestra nueva solución: Procurador <br /> Digital
            </p>
            <SocialButton
              content={"ACCEDE A LA SOLUCION"}
              background={"bg-gradient-to-r from-indigo-500 to-sky-300 "}
            />
          </div>
          <img src={Slide2} alt="Slide 2 img" className="absolute -z-10" />
        </section>
      </main>
    </>
  );
}

export default App;
