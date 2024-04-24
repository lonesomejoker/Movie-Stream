import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
  const icons = [
    {
      id: 1,
      icon: <FaFacebookF color="blue" size={18} />,
    },
    {
      id: 2,
      icon: <FaLinkedin color="blue" size={18} />,
    },
    {
      id: 3,
      icon: <FaGithub color="black" size={18} />,
    },
    {
      id: 4,
      icon: <FaGooglePlusG color="red" size={20} />,
    },
  ];
  return (
    <div className=" md:text-md text-sm overflow-hidden">
      <div
        className=" w-full flex bg-gray-300 h-14 items-center font-varela md:text-md text-
      justify-between md:px-10 px-5 py-2">
        <h1>Get connected with us</h1>

        <div className=" flex gap-x-4">
          {icons.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.icon}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex font-varela bg-black text-white min-h-20 justify-evenly 
      w-full px-6 gap-x-2 pt-3">
        <section className=" w-1/4">
          <h1 className=" font-bold text-violet-600">COMPANY NAME</h1>
          <p className=" line-clamp-3 md:line-clamp-5 lg:line-clamp-none">
            This page contains HTML examples of text - examples of text-specific
            code that you can use for your own website. To use the code, copy it
            straight from the text box and paste it into your own website. Feel
            free to modify it as required.
          </p>
        </section>
        <section className=" w-1/4">
          <h1 className=" font-bold text-violet-600">PRODUCTS</h1>
          <ul className=" md:text-md text-xs lg:text-lg">
            <li>Movies</li>
            <li>Series</li>
            <li>Tv-shows</li>
            <li>Animations</li>
          </ul>
        </section>
        <section className=" w-1/4">
          <h1 className=" font-bold text-violet-600">USEFUL LINKS</h1>
          <ul className=" md:text-md text-xs lg:text-lg">
            <li>Your Account</li>
            <li>Subscriptions</li>
            <li>Help</li>
          </ul>
        </section>
        <section className=" w-1/4 ">
          <h1 className=" font-bold text-violet-600">CONTACTS</h1>
          <ul className=" md:text-sm text-xs lg:text-md">
            <li className=" flex items-center gap-x-1">
            <FaHome className=" hidden md:block"/>KTM,Nepal</li>
            <li className=" flex items-center gap-x-1">
            <FaPhone className=" hidden md:block"/>+977-9841422240</li>
            <li className=" flex items-center gap-x-1 ">
            <FaMailBulk className=" hidden md:block"/>sirissth@gmail.com</li>
          </ul>
        </section>
      </div>
      <div className=" bg-neutral-950 w-full text-white font-madimi md:text-md 
      min-h-14 flex items-center justify-center text-sm">
      Shirish Shrestha ©{new Date().getFullYear()} 
      <span className=" text-red-600 ml-1">Copyright</span>
      </div>
    </div>
  );
};

export default Footer;
