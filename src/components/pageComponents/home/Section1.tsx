// import RomanNumberAnimation from "@/components/website-specific-common-components/RomanNumberAnimation";
import TextAnimation from "@/components/website-specific-common-components/TextAnimation";
import React from "react";
import ScrollingTestimonials from "./ScrollingTestimonials";
import Link from "next/link";

function Section1() {
  const text = "Creamos.experiencias.para.elsector.Horeca";
  return (
    <div className="h-[150vh] flex flex-col justify-center items-center bg-[#E8E6E0]">
      {/* <RomanNumberAnimation text="gastro" romanNumber="I" /> */}
      <TextAnimation
        customClassName={"text-7xl font-junge text-secondary-default"}
        text={text}
      />
      <ScrollingTestimonials />
      <TextAnimation
        customClassName={"  text-7xl font-junge text-secondary-default"}
        text={text}
      />
      <Link href="/#reservation">
        <button className="hover:scale-125 bg-gold transition-all hover:bg-secondary-default duration-300 ease-in-out cursor-pointer w-[100px] rounded-full p-8 px-[3.5rem] flex justify-center item-center ">
          Reserve
          <br />
          Now!
        </button>
      </Link>
    </div>
  );
}

export default Section1;
