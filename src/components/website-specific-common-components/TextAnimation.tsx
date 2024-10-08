"use client";
import React from "react";
import { motion } from "framer-motion";
function TextAnimation({
  text,
  customClassName,
}: {
  text: string;
  customClassName: string;
}) {
  const appearVariants = (sequence: number) => {
    return {
      hidden: {
        opacity: 0,
        x: 20,
      },
      visible: {
        opacity: [0, 0, 0, 0, 1],
        x: 0,
        transition: {
          delay: 0.2 * (sequence / 2),
          duration: 0.4,
          type: "spring",
          stiffness: 100,
          ease: "easeInOut",
        },
      },
    };
  };
  return (
    <div className="flex justify-center items-center  p-8 w-[75%] mx-auto  ">
      <motion.span
        variants={appearVariants(4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="  flex justify-center items-center  flex-wrap "
      >
        {text
          .replace(" ", "   ")
          .split("")
          .map((letter, index) => (
            <motion.span
              key={index}
              variants={appearVariants(index + 4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={` ${customClassName}   px-1 py-4`}
            >
              {letter === "." ? (
                <span className="w-[24px] px-4"></span>
              ) : (
                letter
              )}
            </motion.span>
          ))}
      </motion.span>
    </div>
  );
}

export default TextAnimation;
