import React from "react";
import { menuItems } from "../../arrays/menuItems";
import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <div className="lg:flex justify-between   hidden">
      <Logo />
      <div className="lg:flex gap-10 items-center text-lg font-semibold hidden">
        <ul className="flex gap-10 text-lg font-semibold">
          {menuItems.map((menuItem) => (
            <li className="text-white cursor-pointer">{menuItem.name}</li>
          ))}
        </ul>
        <button className="border-white rounded-xl px-4 pt-1 pb-2 border-2 flex items-center cursor-pointer">
          Support
        </button>
      </div>
    </div>
  );
};

export default Navigation;
