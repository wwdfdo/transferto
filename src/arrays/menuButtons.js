import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
// import { HiCurrencyPound } from "react-icons/hi";

export const menuButtons = [
  {
    id: 7,
    name: <AiFillTwitterCircle size={24} />,
    mobilename: <AiFillTwitterCircle size={40} />,

    url: "https://twitter.com/OutlawsLastRide",
  },
  {
    id: 8,
    name: <AiFillInstagram size={24} />,
    mobilename: <AiFillInstagram size={40} />,
    url: "/",
  },
  {
    id: 9,
    name: <FaDiscord size={24} />,
    mobilename: <FaDiscord size={40} />,

    url: "/",
  },
  // {
  //   id: 10,
  //   name: <HiCurrencyPound size={24} />,
  //   url: "/",
  // },
];
