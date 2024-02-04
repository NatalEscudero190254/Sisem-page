import "./App.css";
import Header from "./components/Header";
import pioneros from "./assets/pioneros-2.jpg";
import SocialButton from "./components/SocialButton";
import logobackground from "./assets/Fondo-misce2.png";
import Bento from "./components/Bento";
// import compliance from "./assets/Bento/compliance-roll-1.png";
// import corporate from "./assets/Bento/Corporate-services-roll-1.png";
// import goverment from "./assets/Bento/goverment-roll.png";
// import agreement from "./assets/Bento/legal-agreement-roll-2.png";
import legalcorporate from "./assets/Bento/Legal-corporate-roll.png";
// import operation from "./assets/Bento/Legal-operation-Roll.png";

function App() {
  return (
    <>
      <main>
        <Header />
        <section className="w-full mx-auto pb-24 py-60 text-center justify-center">
          {/* <div className="absolute z-10 bottom-0 top-0 w-full h-[760px] bg-gradient-to-b from-transparent from-40% via-black/50 to-black"></div> */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row lg:pb-10 justify-center items-center text-center z-20 ">
              Somos pioneros en el desarrollo del <br></br> Legal Tech.
            </h1>
          </div>
          <img
            src={pioneros}
            alt="Imagen pioneros en legal tech"
            className="absolute top-[108px] -bottom-10 left-0 -z-10 "
          />
          <SocialButton
            content={"CONOCENOS"}
            background={"bg-gradient-to-r from-indigo-500 to-sky-300 "}
          />
        </section>

        <section className="w-full mx-auto pb-24 py-60 text-center justify-center">
          <h2 className="text-blue-700 md:text-4xl lg:text-4xl font-bold lg:pb-20 justify-center items-center text-center tracking-wide ">
            Soluciones tecnologicas <br></br>para cada experiencia
          </h2>
          <div className="grid grid-cols-10 auto-rows-[20rem] gap-2 mx-auto max-w-[900px]">
            <Bento
              className={
                "relative rounded-xl backdrop-blur-md border border-black/10  col-span-4 max-h-[740px] bg-blue-950 flex justify-end overflow-hidden group shadow-xl shadow-white/5 "
              }
              // title={"LEGAL CORPORATE"}
              // descripcion={
              //   "Sofware de gestion legal, diselado para optimizar los procesos y requerimientos de la empresa"
              // }
              img={legalcorporate}
            />
            <Bento
              className={
                "relative rounded-xl backdrop-blur-md border border-black/10  col-span-6 max-h-[740px] bg-blue-950 flex justify-end overflow-hidden group shadow-xl shadow-white/5 "
              }
              // title={"LEGAL AGREEMENT"}
              // descripcion={
              //   "Solucion integral y a tu medida para gestionar de manera eficaz los contratos de tu empresa"
              // }
            />
            <Bento
              className={
                "relative rounded-xl backdrop-blur-md border border-black/10  col-span-6 max-h-[740px] bg-blue-950 flex justify-end overflow-hidden group shadow-xl shadow-white/5 "
              }
              // title={"COMPLIANCE"}
              // descripcion={
              //   "Automatizacion de tareas necesarias para llevar a cabo la gestion de cumplimiento normativo"
              // }
            />
            <Bento
              className={
                "relative rounded-xl backdrop-blur-md border border-black/10  col-span-4 max-h-[740px] bg-blue-950 flex justify-end overflow-hidden group shadow-xl shadow-white/5 "
              }
              // title={"CORPORATE SEVICE"}
              // descripcion={
              //   "Solucion integral para gestionar oficios, judiciales o extrajudiciales, que requieran informacion o ejecucion de acciones"
              // }
            />
            <Bento
              className={
                "relative rounded-xl backdrop-blur-md border border-black/10  col-span-4 max-h-[740px] bg-blue-950 flex justify-end overflow-hidden group shadow-xl shadow-white/5 "
              }
              // title={"GOVERNMENT"}
              // descripcion={
              //   "Gestiona tus expedientes legales judiciales y extrajudiciales de manera segura y automatica"
              // }
            />
            <Bento
              className={
                "relative rounded-xl backdrop-blur-md border border-black/10  col-span-6 max-h-[740px] bg-blue-950 flex justify-end overflow-hidden group shadow-xl shadow-white/5 "
              }
              // title={"LEGAL OPERATIONS"}
              // descripcion={
              //   "Optimizá y modernizá los servicios que presta el departamento legal para ofrecer un valor significativo a la organización "
              // }
            />
          </div>
          <img
            src={logobackground}
            alt="Fondo misce 2"
            className="absolute top-[47rem]"
          />
        </section>
      </main>
    </>
  );
}

export default App;
