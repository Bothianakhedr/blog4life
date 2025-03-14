import { FaCaretDown } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { navigateTo } from "@mongez/react-router";

import { links } from "./data";

const Navbar = () => {
  const handleNavigate = (route ) => {
    navigateTo(route );
  };

  return (
    <nav className="flex justify-around py-12">
      <h1 className="text-4xl font-bold">
        Blog<span className="text-red-500">4life</span>
      </h1>
      <ul className="flex gap-5 items-center">
        {links.map((item) => {
          return (
            <li className="flex items-center relative    font-semibold group text-[17px] gap-2">
              {item.name}
              {item.subLinks.length > 0 && <FaCaretDown />}
              {item.subLinks.length > 0 && (
                <ul className="bg-gray-100 invisible group-hover:visible  px-3 min-w-[160px] absolute left-2 top-[110%]">
                  {item.subLinks.map((item) => {
                    return (
                      <li
                        className="p-2 cursor-pointer hover:text-red-500"
                        onClick={() =>
                          handleNavigate(
                            `/${item.toLowerCase().replace(" ", "")}`
                          )
                        }
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <div className="icons flex gap-5 items-center">
        <FaFacebookF className="text-[16px] hover:text-red-400 transition-colors" />
        <FaTwitter className="text-[16px] hover:text-red-400 transition-colors" />
        <FaInstagram className="text-[16px] hover:text-red-400 transition-colors" />
        <FaDribbble className="text-[16px] hover:text-red-400 transition-colors" />
      </div>
    </nav>
  );
};

export default Navbar;
