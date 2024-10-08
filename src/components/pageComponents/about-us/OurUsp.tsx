import Image from "next/image";
import React from "react";
import image1 from "@/assets/images/about-us/2000plus-happy-customers.jpg";
import image2 from "@/assets/images/about-us/rajasthans-biggest-collection.jpg";
import image3 from "@/assets/images/about-us/151-quality-checkpoints.jpg";
import image4 from "@/assets/images/about-us/15plus-luxury-car-brands.jpg";
function OurUsp() {
  const cardInfo = [
    {
      image: image1,
      title: {
        normal: "2000+",
        bold: " Happy Customers",
      },
      details:
        "Join our 2000+ happy customers who have found their ideal car with QC's comprehensive comparisons.",
    },
    {
      image: image2,
      title: {
        normal: "Rajasthan's",
        bold: " Biggest Collection",
      },
      details:
        "Explore Rajasthan's biggest collection of cars with QC's extensive range of options.",
    },
    {
      image: image3,
      title: {
        normal: "151 Quality",
        bold: " CheckPoints",
      },
      details:
        "Experience unmatched quality with QC's 151 rigorous checkpoints ensuring the best cars.",
    },
    {
      image: image4,
      title: {
        normal: "15+ Luxury",
        bold: " Car Brands",
      },
      details:
        "Discover 15+ luxury car brands at QC, helping you choose from the finest automobiles.",
    },
  ];

  return (
    <div>
      <div className="tracking-wider text-xl text-black flex flex-col gap-12 bg-white p-6  md:p-16  xl:p-32 py-32 ">
        <div>
          <span className="text-4xl font-bold">OUR USPS</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 xl:gap-24">
          {cardInfo.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurUsp;

function Card({ card }: any) {
  return (
    <div className="flex flex-col gap-3 md:gap-6 text-center justify-center items-center">
      <Image
        src={card?.image}
        alt="image"
        className=" h-[400px] object-cover w-full rounded-xl md:rounded-3xl "
      />
      <p className="text-3xl ">
        {card?.title.normal}{" "}
        <span className="font-semibold text-2xl md:text-4xl">
          {card?.title.bold}
        </span>
      </p>
      <p className="text-base md:text-xl w-[80%] lg:w-[70%]">{card?.details}</p>
    </div>
  );
}
