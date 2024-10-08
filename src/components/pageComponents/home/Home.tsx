import React from "react";
import HeroSection from "./HeroSection";

import Section1 from "./Section1";
import ScrollingText from "./ScrollingText";
import GalleryImages from "./GalleryImages";

import ImageCarousel from "./ArrowCarousel2";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";

function Home() {
  return (
    <div className=" ">
      <HeroSection />
      <Section1 />
      <HorizontalScrollCarousel />
      <ScrollingText />
      <GalleryImages />
      {/* <ArrowCarousel /> */}
      <ImageCarousel />
    </div>
  );
}

export default Home;
