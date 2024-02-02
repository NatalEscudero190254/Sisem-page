import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import pioneros from "./assets/pioneros-2.jpg";

function App() {
  return (
    <>
      <main>
        <Header />
        <section className="w-full mx-auto pb-24 py-60">
          <div className="absolute z-10 bottom-0 top-0 w-full h-[760px] bg-gradient-to-b from-transparent from-20% via-black/50 to-black"></div>
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
        </section>
      </main>
    </>
  );
}

export default App;
