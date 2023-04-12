import "./App.css";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";

import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="h-screen w-full bg-[#13f287] flex justify-center items-center">
      <div className="w-11/12 bg-black  rounded-2xl py-10 flex flex-col justify-center gap-20 text-white px-[5%]">
        <div className="flex justify-between  ">
          <Logo />
          <Header />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-[5.1rem] leading-[5rem] font-bold">
              Swap any <br /> tokens across <br /> nine chain
            </h1>
            <p className="text-xl">
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
