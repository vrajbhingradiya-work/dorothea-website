import React from "react";
import BannerAboutUs from "./BannerAboutUs";
import IntroCompany from "./IntroCompany";
import OurValues from "./OurValues";

function AboutUs() {
  return (
    <div>
      <BannerAboutUs />
      <IntroCompany companyName="Wheels Of World" />
      <OurValues />
    </div>
  );
}

export default AboutUs;
