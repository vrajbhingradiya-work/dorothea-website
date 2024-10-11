/* eslint-disable @typescript-eslint/no-explicit-any */
// import RomanNumberAnimation from "@/components/website-specific-common-components/RomanNumberAnimation";
"use client";
import TextAnimation from "@/components/website-specific-common-components/TextAnimation";
import React from "react";
import ScrollingTestimonials from "./ScrollingTestimonials";

function Section1({ setIsModalOpen }: { setIsModalOpen: any }) {
  const text = "Creamos.experiencias.para.elsector.Horeca";
  return (
    <div className="py-4 h-auto xl:h-[150vh] flex flex-col justify-center items-center bg-[#E8E6E0]">
      {/* <RomanNumberAnimation text="gastro" romanNumber="I" /> */}
      <TextAnimation
        customClassName={
          "text-3xl xl:text-7xl font-junge text-secondary-default"
        }
        text={text}
      />
      <ScrollingTestimonials />
      <TextAnimation
        customClassName={
          "  text-3xl xl:text-7xl font-junge text-secondary-default"
        }
        text={text}
      />

      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="hover:scale-125 bg-gold transition-all hover:bg-secondary-default duration-300 ease-in-out cursor-pointer w-[100px] rounded-full p-8 px-[3.5rem] flex justify-center item-center "
      >
        Reserve
        <br />
        Now!
      </button>
    </div>
  );
}

export default Section1;
