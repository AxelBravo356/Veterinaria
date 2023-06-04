"use client";
import Image from "next/image";
import { useState } from "react";

export default function NavAdmin() {
  const Links = [{ name: "CONTÁCTANOS" }, { name: "SERVICIOS" }];

  const [open, setOpen] = useState(false);

  return (
    <div className=" shadow-md w-full  top-0 left-0">
      <div className="bg-sky-500 md:flex items-center justify-between py-4 md:px-10 px-7">
        <div
          className="font-bold text-xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span>
            <Image
              src={"/Logo.png"}
              width={200}
              height={200}
              className="object-cover max-h-12 max-w-xl"
            />
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon></ion-icon>
          <svg
            name={open ? "close" : "menu"}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <ul
          className={`bg-sky-500 md:flex md:items-center md:pb-0 pb-10 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-24 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
