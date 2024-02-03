import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import pioneros from "./assets/pioneros-2.jpg";
import SocialButton from "./components/SocialButton";
import logobackground from "./assets/Fondo-misce2.png";

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
          <h2 className="text-blue-700 md:text-4xl lg:text-4xl font-bold lg:pb-10 justify-center items-center text-center ">
            Soluciones tecnologicas <br></br>para cada experiencia
          </h2>
          <div className="grid grid-cols-10 auto-rows-[20rem] gap-2 mx-auto"></div>
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
