/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, ReactSVGElement } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { GrFormNextLink as LinkArrow } from "react-icons/gr";

interface SocialLinksType {
  href: string;
  icon: ReactNode; // ReactNode allows any valid JSX element to be passed as the icon
  title: string;
}
import { TbMessageDots as MessageIcon } from "react-icons/tb";

import { FiPhoneIncoming as PhoneIcon } from "react-icons/fi";
import { IoMailOpenOutline as MailIcon } from "react-icons/io5";
import { GrLocation as LocationIcon } from "react-icons/gr";
import foodImage from "../../assets/images/footer/food-image-footer.png";

function Footer({ footerData }: any) {
  const socialLinks = [
    {
      href: "https://www.facebook.com",
      icon: <FaFacebookF />, // Facebook icon
      title: "Facebook",
    },
    {
      href: "https://www.instagram.com",
      icon: <FaInstagram />, // Instagram icon
      title: "Instagram",
    },
    {
      href: "https://www.linkedin.com",
      icon: <FaLinkedinIn />, // LinkedIn icon
      title: "LinkedIn",
    },
    {
      href: "https://www.youtube.com",
      icon: <FaYoutube />, // YouTube icon
      title: "YouTube",
    },
  ];
  const footerColumns = [
    {
      heading: "Company",
      subLinks: [
        { href: "/about", title: "About Us" },
        { href: "/careers", title: "Careers" },
        { href: "/press", title: "Press" },
      ],
    },
    {
      heading: "Support",
      subLinks: [
        { href: "/help", title: "Help Center" },
        { href: "/contact", title: "Contact Us" },
        { href: "/faq", title: "FAQs" },
      ],
    },
    {
      heading: "Legal",
      subLinks: [
        { href: "/terms", title: "Terms of Service" },
        { href: "/privacy", title: "Privacy Policy" },
        { href: "/cookies", title: "Cookie Policy" },
      ],
    },
    {
      heading: "Social",
      subLinks: [
        { href: "https://www.facebook.com", title: "Facebook" },
        { href: "https://www.instagram.com", title: "Instagram" },
        { href: "https://www.linkedin.com", title: "LinkedIn" },
      ],
    },
  ];

  const CopyrightSectionData = {
    brandName: "Dorothea",
    websiteCreator: { link: "https://digitalfry.in", name: "Digital Fry" },
    privacyPolicyUrl: "/",
    termsAndConditionsUrl: "/",
  };

  return (
    <div className=" bg-[#FAF6F3] text-secondary-dark gap-4 flex flex-col ">
      <div className="flex justify-center items-center max-h-[250px]  ">
        <Image
          className="object-fit -translate-y-28  "
          src={foodImage}
          alt="food image"
        />
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 justify-center items-start max-w-[80%] mx-auto gap-20 pb-24">
        <div className="flex flex-col gap-2 justify-center items-center  mx-auto">
          <MessageIcon className="h-8 w-8 mb-2" />
          <div className="font-semibold text-xl w-full text-center">
            ABOUT DOROTHEA
          </div>
          <Link
            href="/"
            className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-gold text-sm text-center xl:max-w-[175px]"
          >
            Enjoy a wonderful cafe dining experience
          </Link>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center  mx-auto">
          <PhoneIcon className="h-8 w-8 mb-2" />
          <div className="font-semibold text-xl w-full text-center">
            {"LET'S TALK"}
          </div>
          <Link
            href="/"
            className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-gold text-sm text-center"
          >
            Phone: 1-800-222-000
          </Link>
          <Link
            href="/"
            className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-gold text-sm text-center -mt-2"
          >
            Phone: 1-800-222-000
          </Link>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center  mx-auto">
          <MailIcon className="h-8 w-8 mb-2" />
          <div className="font-semibold text-xl w-full text-center">
            BOOK A TABLE
          </div>
          <Link
            href="/"
            className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-gold text-sm text-center"
          >
            info@yourdomain.com
          </Link>
          <Link
            href="/"
            className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-gold text-sm text-center -mt-2"
          >
            info@yourdomain.com
          </Link>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center  mx-auto">
          <LocationIcon className="h-8 w-8 mb-2" />
          <div className="font-semibold text-xl w-full text-center">
            CONTACT US
          </div>
          <Link
            href="/"
            className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-gold text-sm text-center"
          >
            Get Directions.
          </Link>
        </div>
      </div>

      {/* copyright section */}
      <div className=" flex justify-center items-center bg-secondary-light ">
        <CopyrightSection data={CopyrightSectionData} />
      </div>
    </div>
  );
}

export default Footer;

function SocialIconLink({ item }: { item: SocialLinksType }) {
  return (
    <Link
      href={item.href}
      className="group flex justify-center items-center w-full    "
    >
      <div className="p-4 group-hover:bg-white/10 rounded-xl  group-hover:scale-105 flex gap-4 justify-between items-center transition-all  duration-500 ease-in-out">
        <div className="flex justify-start gap-3 items-center ">
          {item.icon}
          <span className="flex items-center justify-center">
            {item.title.toUpperCase()}
          </span>
        </div>
        <LinkArrow className="fill-white h-6 w-6 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0 -translate-x-2 -rotate-45" />
      </div>
    </Link>
  );
}

function FooterColumns({ item }: any) {
  return (
    <div className="p-2 ">
      <div className="text-center font-semibold mb-8 tracking-widest text-xl">
        {item.heading.toUpperCase()}
      </div>
      <div className="flex flex-col gap-4 justify-center items-center text-[12px] ">
        {item.subLinks.map((subLink: any, subIndex: any) => (
          <Link
            className="hover:scale-125 transition ease-in-out duration-500 text-white/50 hover:text-white"
            key={subIndex}
            href={subLink.href}
          >
            {subLink.title.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}

function CopyrightSection({ data }: any) {
  return (
    <div className="content-box py-8 w-full flex flex-col gap-4 lg:flex-row justify-between items-center text-[#A6A3A1] tracking-wide text-sm ">
      <div className="flex lg:flex-row lg:gap-8 lg:items-center flex-col gap-4   justify-center lg:justify-start items-start w-full">
        <span className="text-white  w-full md:w-auto text-center md:text-left">
          Copyright &copy; 2024 {data.brandName}{" "}
        </span>
        <div className="flex w-full xl:max-w-[30%]  gap-8 justify-center mx-auto xl:mx-0 xl:gap-8  items-center  ">
          <Link
            className="hover:text-white/80 transition hover:scale-105 ease-in-out duration-500"
            href={data.privacyPolicyUrl}
          >
            Privacy Policy
          </Link>
          {/*
          <Link href="/sell"> Cancellation & Refund</Link> */}

          <Link
            className="hover:text-white/80 transition hover:scale-105 ease-in-out duration-500 "
            href={data.termsAndConditionsUrl}
          >
            {" "}
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div className=" w-full flex justify-center gap-1 items-centerw-full max-w-[250px] mx-auto py-6 xl:py-0">
        Website Developed by{"  "}
        <Link
          href={data.websiteCreator.link}
          className="hover:text-white transition-all hover:scale-105 ease-in-out duration-500 hover:tracking-wider text-white"
        >
          {data.websiteCreator.name}
        </Link>
      </div>
    </div>
  );
}
