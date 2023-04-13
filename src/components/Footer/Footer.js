import React from "react";
import { footerItems } from "../../arrays/footerItems";

const Footer = () => {
  return (
    <ul className="flex lg:flex-nowrap flex-wrap text-base lg:gap-10 gap-5 font-bold lg:text-lg pt-10 w-11/12  mx-auto justify-center">
      {footerItems.map((footerItem) => (
        <div className="flex items-center gap-4 cursor-pointer">
          <div>{footerItem.icon}</div>
          <li>{footerItem.name}</li>
        </div>
      ))}
    </ul>
  );
};

export default Footer;
