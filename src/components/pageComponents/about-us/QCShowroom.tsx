import Link from "next/link";
import React from "react";
import image from "@/assets/images/about-us/showroom.jpeg";
import Image from "next/image";

function QCShowroom() {
  return (
    <>
      <div className="text-black flex flex-col lg:flex-row items-center justify-center lg:gap-24 gap-8 w-full h-full  bg-[#F2F2F2] lg:p-32 p-6 py-16 md:p-20">
        <Image
          className="h-[450px] w-full md:w-2/5 object-cover rounded-2xl "
          src={image}
          alt="showroom image"
        />
        <div className="lg:pr-12 flex flex-col gap-6 md:gap-12 w-full  md:w-1/3  md:py-16">
          <div className="text-3xl md:text-5xl font-semibold tracking-wider">
            <p className="  text-black">QC SHOWROOM</p>
          </div>
          <div className="text-lg md:text-2xl">
            {`At QUALITY CARS the aim has always been to dream big and achieve great. Welcome to our showroom's tour. Hope that you will enjoy your time cruising through. A little warning before you scroll ahead "You can check out anytime you want but you can never leave"
          `}
          </div>
          <Link
            href="https://maps.app.goo.gl/eRZCYbNrFasngtjS9"
            className=" w-full md:w-[75%] text-base md:text-xl border-[1px] border-[#CCCCCC] px-4 pl-6 py-4 flex justify-between items-center group transition hoverease-in-out  hover:text-white hover:bg-black hover:fill-white duration-300 rounded-xl tracking-[.2em] font-medium  "
          >
            <span>LOCATE OUR SHOWROOM</span>

            <svg
              className={`w-[15px] h-[15px] group-hover:translate-x-1   transition ease-in-out duration-150`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default QCShowroom;
