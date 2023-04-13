import "./App.css";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";

import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="lg:h-screen h-[100%]  w-[100%] bg-[#13f287] flex justify-center items-center m-0 box-border p-0 ">
      <div className="w-11/12 my-10 bg-gradient-to-t from-[#000000a0] from-10% to-black to-90% rounded-2xl py-10 relative  flex flex-col justify-center gap-20 text-white px-[5%]">
        <Header />

        <div className="flex lg:flex-row flex-col items-center  lg:gap-20 gap-10 lg:justify-between justify-center text-center lg:text-left">
          <div className="flex flex-col gap-5">
            <h1 className="lg:text-[5.1rem] text-[3rem] leading-[3rem] lg:leading-[5rem] font-bold">
              Swap any <br /> tokens across <br /> nine chain
            </h1>
            <p className="lg:text-xl text-lg">
              For the Apes, by the Lizards. Swing across chains and ape into{" "}
              <br />
              your token where they pump!
            </p>
          </div>
          <Card />
        </div>
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
