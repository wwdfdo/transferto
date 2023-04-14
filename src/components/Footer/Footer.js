import React from "react";
import { footerItems } from "../../arrays/footerItems";

const Footer = () => {
  return (
    <ul className="flex lg:flex-nowrap flex-wrap text-base lg:gap-10 gap-4 font-bold lg:text-lg lg:pt-10 pt-0 pb-2 lg:pb-0 lg:w-11/12  mx-auto justify-center">
      {footerItems.map((footerItem) => (
        <div className="flex items-center lg:gap-4 gap-2 cursor-pointer">
          {/* <div>{footerItem.icon}</div> */}
          <img src={footerItem.icon} className={`${footerItem.class}`} alt="" />
          <li>{footerItem.name}</li>
        </div>
      ))}
    </ul>
  );
};

export default Footer;
