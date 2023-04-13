import React from "react";
// import { ImMenu } from "react-icons/im";

import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { menus } from "../../arrays/menus";
// import Logo from "./Logo";

// import { Link } from "react-router-dom";
import { menuButtons } from "../../arrays/menuButtons";
import Logo from "../Logo/Logo";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenu
      className="text-[30px] absolute right-[3%]"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeIcon = (
    <CgClose
      className="text-[30px] text-right absolute right-3 top-3 text-white"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <div className="flex z-100 justify-between absolute w-11/12 top-5  lg:hidden">
      <Logo width="w-[50px]" />
      <div
        className={`lg:hidden items-center   text-[1.4rem] tracking-[0.5rem] font-semibold flex gap-5  flex-col ${
          open
            ? "bg-[#014122] p-10  absolute top-0 right-0  w-[100%]   bg-opacity-95"
            : ""
        }`}
      >
        {open ? closeIcon : hamburgerIcon}
        {open &&
          menus.map((menu) => (
            <a
              key={menu.id}
              className={`text-white font-bold  ${
                menu.id === "button"
                  ? " bg-white bg-opacity-50  px-3 border-2 border-white rounded-md text-[#000] text-center "
                  : ""
              }`}
              href={menu.url}
              onClick={() => closeMobileMenu()}
            >
              {menu.name}
            </a>
          ))}
      </div>
    </div>
  );
};

export default MobileNav;
