"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  sequence: number;
}

const SlideToLeft = ({ children, sequence }: Props) => {
  const textSimpleRevealUp = {
    hidden: {
      opacity: 0,
      x: 0,
      sacle: 1,
    },
    visible: {
      opacity: [0, 0, 0, 0, 1],
      x: -100,
      scale: 0.5,
      transition: {
        delay: 0.2 * (sequence / 2),
        duration: 0.8,
        type: "spring",
        stiffness: 50,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div>
      <motion.div
        variants={textSimpleRevealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideToLeft;
