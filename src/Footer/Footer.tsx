import { footerLinks, siteInfo } from "./footer";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#131517] py-15 md:flex md:gap-5 md:justify-around">
      <div className="image w-[20%] ms-5 md:mt-5 ">
        <img className="w-full" src="/src/assets/imgs/logo.webp" alt="logo" />
      </div>
      <div className="flex gap-5  ">
        <ul className=" p-4">
          {siteInfo.map((link, index) => {
            return (
              <li
                className="text-white cursor-pointer p-2 hover:text-red-500 transition-colors font-[500] text-[17px]"
                key={index}
              >
                {link}
              </li>
            );
          })}
        </ul>
        <ul className=" p-4">
          {footerLinks.map((link, index) => {
            return (
              <li
                className="text-white cursor-pointer p-2 hover:text-red-500 transition-colors text-[17px] font-[500]"
                key={index}
              >
                {link}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="icons text-white flex p-3 gap-8 mt-5">
        <FaFacebookF className="hover:text-red-500 transition-colors" />
        <FaTwitter className="hover:text-red-500 transition-colors" />
        <FaInstagram className="hover:text-red-500 transition-colors" />
        <FaYoutube className="hover:text-red-500 transition-colors" />
      </div>
    </section>
  );
};

export default Footer;
