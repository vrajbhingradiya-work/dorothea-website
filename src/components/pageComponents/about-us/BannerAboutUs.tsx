import Image from "next/image";
import React from "react";
import bgImage from "@/assets/images/header1.jpg";

function BannerAboutUs() {
  return (
    <div>
      <div className="relative h-screen lg:h-screen w-full">
        <Image
          src={bgImage}
          priority={true}
          alt="image"
          className="h-screen w-full object-cover"
        />
        <div className=" absolute top-0 left-0 h-screen w-full flex items-end pb-8  tracking-widest bg-black/50  ">
          <div className=" content-box flex flex-col items-center w-full mb-3 gap-3 text-white text-left pl-8 ">
            <span className="text-xl  md:pr-0 md:text-lg font-semibold w-full">{`ABOUT US`}</span>
            <span className="text-3xl md:text-6xl  md:pr-0 font-bold w-full ">
              WHEELS OF WORLD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerAboutUs;
