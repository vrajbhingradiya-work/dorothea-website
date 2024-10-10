"use client";
import React, { useState } from "react";
import HeroSection from "./HeroSection";

import Section1 from "./Section1";
import ScrollingText from "./ScrollingText";
import GalleryImages from "./GalleryImages";

import ImageCarousel from "./ArrowCarousel2";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import Navbar from "@/components/common/Navbar";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div className=" ">
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <HeroSection />
      <Section1 setIsModalOpen={setIsModalOpen} />
      <HorizontalScrollCarousel setIsModalOpen={setIsModalOpen} />
      <ScrollingText />
      <GalleryImages />
      {/* <ArrowCarousel /> */}
      <ImageCarousel />
    </div>
  );
}

export default Home;
