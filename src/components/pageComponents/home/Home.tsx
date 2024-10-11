"use client";
import React, { useState } from "react";
import HeroSection from "./HeroSection";

import Section1 from "./Section1";
import ScrollingText from "./ScrollingText";
import GalleryImages from "./GalleryImages";

import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import Navbar from "@/components/common/Navbar";
import ImageCarousel from "./ArrowCarousel2";
import ImageCarouselMobile from "./ArrowCarouselMobile";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div className=" ">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <Section1 setIsModalOpen={setIsModalOpen} />
      </div>

      <HorizontalScrollCarousel setIsModalOpen={setIsModalOpen} />
      <div id="gallery">
        <ScrollingText />
        <GalleryImages />
      </div>
      {/* <ArrowCarousel /> */}
      <div className="hidden xl:block">
        <ImageCarousel />
      </div>
      <div className="xl:hidden">
        <ImageCarouselMobile />
      </div>
    </div>
  );
}

export default Home;
