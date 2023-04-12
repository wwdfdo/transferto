import React from "react";
import { footerItems } from "../../arrays/footerItems";

const Footer = () => {
  return (
    <ul className="flex gap-10 font-bold text-lg pt-10">
      {footerItems.map((footerItem) => (
        <div className="flex items-center gap-4">
          <div>{footerItem.icon}</div>
          <li>{footerItem.name}</li>
        </div>
      ))}
    </ul>
  );
};

export default Footer;
