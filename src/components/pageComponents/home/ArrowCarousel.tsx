"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineArrowNarrowLeft as LeftArrow } from "react-icons/hi";
import { HiOutlineArrowNarrowRight as RightArrow } from "react-icons/hi";
export default function ArrowCarousel() {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(idx);

  const trend = idx > prevIdx ? 1 : -1;

  const imageIndex = Math.abs(idx % images.length);

  return (
    <div className="h-[50vw] min-h-[400px] max-h-screen bg-primary-default relative overflow-hidden   ">
      <button
        title="button"
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv - 1);
        }}
        className="transition-all ease-in-out text-secondary-default hover:-translate-x-4 hover:text-gold duration-300  hover:bg-white rounded-full  p-6 -mb-4 xl:mb-12 absolute z-10 right-8 xl:right-96  bottom-0  flex justify-center items-center"
      >
        <LeftArrow className="w-8 h-6" />
      </button>

      <div className="absolute inset-0 z-[5] backdrop-blur-xl bg-primary-default">
        <AnimatePresence initial={false} custom={trend}>
          <motion.img
            variants={imgVariants}
            custom={trend}
            initial="initial"
            animate="animate"
            exit="exit"
            key={images[imageIndex].id}
            src={images[imageIndex].src}
            alt={images[imageIndex].title}
            style={{ y: "-50%", x: "-100%" }}
            className=" w-[500px] mx-auto bg-black object-cover shadow-2xl absolute left-1/2 top-1/2"
          />
        </AnimatePresence>
        <AnimatePresence initial={false} custom={trend}>
          <motion.img
            variants={imgVariants}
            custom={trend}
            initial="initial"
            animate="animate"
            exit="exit"
            key={images[imageIndex].id}
            src={images[imageIndex].src}
            alt={images[imageIndex].title}
            style={{ y: "-50%", x: "100%" }}
            className=" w-[500px] mx-auto bg-black object-cover shadow-2xl absolute left-1/2 top-1/2"
          />
        </AnimatePresence>
        <AnimatePresence initial={false} custom={trend}>
          <motion.img
            variants={imgVariants}
            custom={trend}
            initial="initial"
            animate="animate"
            exit="exit"
            key={images[imageIndex].id}
            src={images[imageIndex].src}
            alt={images[imageIndex].title}
            style={{ y: "-50%", x: "-50%" }}
            className=" w-[500px] mx-auto bg-black object-cover shadow-2xl absolute left-1/2 top-1/2"
          />
        </AnimatePresence>
      </div>
      <button
        title="button"
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv + 1);
        }}
        className="  transition-all ease-in-out text-secondary-default hover:translate-x-4 hover:text-gold duration-300  hover:bg-white rounded-full p-6 -mb-4 xl:mb-12 absolute z-10 right-4 xl:right-80 bottom-0   flex justify-center items-center"
      >
        <RightArrow className="w-8 h-6" />
      </button>

      <AnimatePresence initial={false} custom={trend}>
        <motion.span
          custom={trend}
          variants={titleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={images[imageIndex].id}
          className="font-junge text-gold text-xl md:text-5xl p-2 rounded-lg  font-semibold  absolute z-20 xl:left-[32rem] bottom-0 xl:bottom-0 xl:mb-12"
        >
          {images[imageIndex].title}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

const imgVariants = {
  initial: (trend: 1 | 0) => ({
    x: trend === 1 ? "200%" : "-200%",
    opacity: 0,
  }),
  animate: { x: "-50%", opacity: 1 },
  exit: (trend: 1 | 0) => ({
    x: trend === 1 ? "-200%" : "200%",
    opacity: 0,
  }),
};

const titleVariants = {
  initial: (trend: 1 | 0) => ({
    y: trend === 1 ? 20 : -20,
    opacity: 0,
  }),
  animate: { y: 0, opacity: 1 },
  exit: (trend: 1 | 0) => ({
    y: trend === 1 ? -20 : 20,
    opacity: 0,
  }),
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    title: "Special Events",
    id: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1637141816287-4a55cfeecda2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    title: "Food",
    id: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    title: "Ambience",
    id: 3,
  },
];
