"use client";
import React from "react";

import { motion } from "framer-motion";

function RomanNumberAnimation({
  romanNumber,
  text = "",
}: {
  romanNumber: string;
  text: string;
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
          stiffness: 20,
          ease: "easeInOut",
        },
      },
    };
  };
  return (
    <div className="flex justify-center items-center  p-8 w-full ">
      <motion.div
        variants={appearVariants(1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-[1px] px-2 py-2  max-w-20 border-white flex justify-center items-center "
      >
        <motion.span
          variants={appearVariants(2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-[1px] px-2 py-2  border-white flex justify-center items-center"
        >
          <motion.span
            variants={appearVariants(3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl  px-2 py-4"
          >
            {romanNumber}
          </motion.span>
        </motion.span>
      </motion.div>
      {/* heading */}
      {text !== "" && (
        <motion.div
          variants={appearVariants(2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" px-2 py-2  max-w-20 border-white flex justify-center items-center "
        >
          <motion.span
            variants={appearVariants(3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pl-24 px-2 py-2  border-white flex justify-center items-center"
          >
            <motion.span
              variants={appearVariants(4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl  px-2 py-4"
            >
              {text.toUpperCase()}
            </motion.span>
          </motion.span>
        </motion.div>
      )}
    </div>
  );
}

export default RomanNumberAnimation;
