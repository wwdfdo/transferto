import React from "react";
import { menuItems } from "../../arrays/menuItems";

const Header = () => {
  return (
    <div className="flex gap-10 items-center text-lg font-semibold">
      <ul className="flex gap-10 text-lg font-semibold">
        {menuItems.map((menuItem) => (
          <li className="text-white cursor-pointer">{menuItem.name}</li>
        ))}
      </ul>
      <button className="border-white rounded-xl px-4 pt-1 pb-2 border-2 flex items-center cursor-pointer">
        Support
      </button>
    </div>
  );
};

export default Header;
