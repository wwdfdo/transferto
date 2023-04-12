import React from "react";
import { TiBatteryHigh } from "react-icons/ti";
import { RiArrowUpDownFill } from "react-icons/ri";
import "./Card.css";
import gem1 from "../../images/gem1.png";
import gem2 from "../../images/gem2.png";
import gem3 from "../../images/gem3.png";
const Card = () => {
  return (
    <div className="relative">
      <div className="dot absolute w-[50px] h-[50px] -top-10 -right-10 "></div>
      <div className="dot absolute w-[70px] h-[70px] -top-20 -right-20 "></div>
      <img src={gem1} className="absolute top-0 -left-20" alt="" />
      <img src={gem2} className="absolute top-0 -right-16" alt="" />
      <div className="flex flex-col justify-center  py-5 px-8  bg-[#181a1c] gap-6 rounded-xl w-[400px]">
        <div className="flex gap-5 items-center">
          <TiBatteryHigh size={32} />
          <h2 className="text-lg font-semibold">Choose Your Option</h2>
        </div>

        <div className="flex flex-col  py-5  shadow-[inset_0px_0px_10px_0px_rgb(19,242,135,1)] gap-6 justify-center rounded-xl">
          <div className="flex justify-around">
            <div className="px-2 py-1 border-spacing-5 border-2 border-white rounded-lg bg-black w-2/5">
              <select
                name="cars"
                id="cars"
                className="bg-black outline-none pr-12 w-full flex justify-start text-[.8rem]   "
              >
                <option value="volvo">BSC</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="px-2 py-1 border-spacing-5 border-2 border-white rounded-lg bg-black w-2/5">
              <select
                name="cars"
                id="cars"
                className="bg-black outline-none pr-12 w-full flex justify-start text-[.8rem]   "
              >
                <option value="volvo">CAKE</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div className=" flex items-center px-5 gap-4">
            <div className="h-[1px] w-1/2 bg-white"></div>
            <RiArrowUpDownFill size={28} />
            <div className="h-[1px] w-1/2 bg-white"></div>
          </div>

          <div className="flex justify-around">
            <div className="px-2 py-1 border-spacing-5 border-2 border-white rounded-lg bg-black w-2/5">
              <select
                name="cars"
                id="cars"
                className="bg-black outline-none pr-12 w-full flex justify-start text-[.8rem]   "
              >
                <option value="volvo">POLY</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="px-2 py-1 border-spacing-5 border-2 border-white rounded-lg bg-black w-2/5">
              <select
                name="cars"
                id="cars"
                className="bg-black outline-none pr-12 w-full flex justify-start text-[.8rem]   "
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center shadow-[0px_5px_10px_0px_rgb(110,79,204,1)] w-1/2 mx-auto rounded-lg bg-pink-500 py-1 text-black font-bold">
          Swap
        </div>
      </div>
      <div className="dot absolute w-[50px] h-[50px] right-0 "></div>
      <div className="dot absolute w-[70px] h-[70px] -bottom-10 -right-10 "></div>
      <div className="dot absolute w-[50px] h-[50px] bottom-48 -left-20 "></div>
      <div className="dot absolute w-[70px] h-[70px] bottom-40 -left-32 "></div>
      <img src={gem3} className="absolute right-20" alt="" />
    </div>
  );
};

export default Card;
