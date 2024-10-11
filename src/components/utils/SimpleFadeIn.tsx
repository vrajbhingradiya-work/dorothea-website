"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  sequence: number;
}

const SimpleFadeIn = ({ children, sequence }: Props) => {
  const reveal = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1 * (sequence / 2),
        duration: 0.6,
        stiffness: 100,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div>
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SimpleFadeIn;
