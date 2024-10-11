import Link from "next/link";
import React from "react";

import { GrFormNextLink as LinkArrow } from "react-icons/gr";
import { IoMdCall as CallIcon } from "react-icons/io";
import { IoMdMail as MailIcon } from "react-icons/io";
import { FaDirections as Directions } from "react-icons/fa";

function ContactDetails({
  contactDetails = {
    email: "abc@gmail.com",
    phoneNumber: "+91-34019-81232",
    address: {
      locationPin: "https://googlemaps.com",
      fullAddress: "Jagatpura, Jaipur",
    },
  },
}: any) {
  const contactDetailsIconData = [
    {
      href: "tel:+913401981232",
      icon: <CallIcon />, // Facebook icon
      title: "Call Now",
    },
    {
      href: "mailto:abc@gmail.com",
      icon: <MailIcon />, // Instagram icon
      title: "Email Us",
    },
    {
      href: "https://www.linkedin.com",
      icon: <Directions />, // LinkedIn icon
      title: "Get Directions",
    },
    // {
    //   href: "https://www.youtube.com",
    //   icon: <FaYoutube />, // YouTube icon
    //   title: "YouTube",
    // },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 ">
      <div className="grid grid-cols-1 gap- justify-start items-start w-full">
        <span className="text-6xl mb-12">Contact Us</span>
        <div className="grid grid-cols-1  gap-8">
          {contactDetailsIconData.map((item, index) => (
            <ContactDetailIcon key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactDetailIcon({ item }: any) {
  return (
    <Link
      href={item.href}
      className="group flex justify-start items-center w-full     "
    >
      <div className=" w-full  p-4 group-hover:bg-white/20 bg-white/10 rounded-xl  group-hover:scale-[102%] flex gap-4 justify-between items-center transition-all  duration-500 ease-in-out">
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

export default ContactDetails;
