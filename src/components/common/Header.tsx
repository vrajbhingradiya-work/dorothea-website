/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import React from "react";
import BrandLogo from "../../assets/images/company-logo/company-logo.png";

import Link from "next/link";
import { NavPhone } from "./NavPhone";
import { NavDesktop } from "./NavDesktop";
import { motion } from "framer-motion";
import { MdOutlineBookmarkAdd as BookingLogo } from "react-icons/md";

function Header({ setIsModalOpen }: { setIsModalOpen: any }) {
  // const menuLinks = [
  //   {
  //     title: "ABOUT",
  //     href: "/#about",
  //   },
  //   {
  //     title: "SERVICES",
  //     href: "/#services",
  //   },
  //   {
  //     title: "MENU",
  //     href: "/#menu",
  //   },
  //   {
  //     title: "TEAM",
  //     href: "/#team",
  //   },
  //   {
  //     title: "GALLERY",
  //     href: "/#gallery",
  //   },
  //   {
  //     title: "CONTACT",
  //     href: "/contact",
  //   },
  // ];

  return (
    <div className=" ">
      <div className=" flex justify-center items-center min-h-full ">
        <div className="w-full   backdrop-blur-[4px] min-h-full ">
          <div className="   flex    justify-between items-center  xl:border-b-[1px]  border-double border-white/50 font-junge border-b-2 xl:min-h-28 h-full ">
            <div className="min-h-16 cols-span-1  xl:border-r-2 xl:border-white/50">
              <div className=" flex gap-4 items-center justify-start pl-4 xl:pl-0 px-2 tracking-wider cursor-pointer xl:hidden ">
                {/* <AnimatedHamburgerButton /> */}
                <div className="">
                  <NavPhone />
                </div>
              </div>
              <div className=" hidden xl:flex gap-4 items-center  px-2 tracking-wider cursor-pointer  ">
                <div className="flex justify-center items-center gap-4 ">
                  <NavDesktop />

                  <span className="-ml-8   pr-6">Menu</span>
                </div>
                {/* <AnimatedHamburgerButton /> */}
              </div>
            </div>
            <motion.div className="flex xl:justify-evenly justify-end items-center cols-span-1 w-full min-h-16 ">
              <Link
                href="/"
                className="flex justify-end xl:justify-center items-center h-12 xl:w-44  "
              >
                <Image
                  alt="brand logo"
                  src={BrandLogo}
                  className="object-contain w-16 mr-6 xl:mr-0 h-12 xl:w-44 hover:scale-150 transition ease-in-out duration-700"
                />
              </Link>
            </motion.div>
            <div className="cols-span-1 min-h-full  border-l-2 border-white/50 ">
              <button
                onClick={() => {
                  setIsModalOpen(true);
                }}
                className=" min-h-20 cols-span-1 hidden xl:flex gap-4 items-center justify-end  tracking-wider cursor-pointer px-8   "
              >
                <BookingLogo className="h-6 w-6 fill-white" />
                <span className="-ml-2">RESERVATION</span>
              </button>
            </div>
          </div>
          {/* <div className="   flex justify-center items-center gap-4 py-4 xl:border-b-[1px] border-double border-white/50 ">
            <motion.div className="flex justify-evenly items-center  max-w-[45%] w-full ">
              {menuLinks.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="hidden xl:flex justify-center items-center transition ease-in-out hover:scale-[110%] duration-700  text-sm"
                >
                  {item.title}
                </Link>
              ))}
            </motion.div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
