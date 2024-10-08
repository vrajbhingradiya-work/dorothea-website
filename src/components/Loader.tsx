"useClient";
import React from "react";

import BrandLogo from "../assets/images/company-logo/wheels of world white.png";
import Image from "next/image";
import { motion } from "framer-motion";

function Loader({ duration = 5500 }: any) {
  const firstLoadAnimation1 = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: [1, 1, 0, 0, 0],

      transition: {
        delay: 0,
        duration: 15,
        stiffness: 100,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.25,
        duration: 1,
        ease: "easeInOut",
        mass: 3,
        stiffness: 450,
        damping: 50,
      },
    },
  };
  const firstLoadAnimation2 = {
    hidden: {
      opacity: 0,
      y: 0,
      scale: 5,
    },
    visible: {
      opacity: [0.5, 1, 1, 1],
      y: [0, 0, 0, 0, -280],
      scale: [5, 5, 5, 5, 1],

      transition: {
        delay: 0,
        duration: 5,
        stiffness: 100,
        ease: "easeInOut",
      },
    },
  };
  //   const solidToTransparent = {
  //     hidden: {
  //       opacity: 1,
  //       background: "black",
  //     },
  //     visible: {
  //       opacity: 0,

  //       transition: {
  //         delay: 0,
  //         duration: duration - 1000 / 100,
  //         stiffness: 100,
  //         ease: "easeInOut",
  //       },
  //     },
  //   };
  return (
    <div className="h-screen w-full overflow-hidden">
      <motion.div className="h-full w-full flex justify-center item-center ">
        <motion.div
          variants={firstLoadAnimation1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-end xl:justify-center items-center h-full w-full bg-black "
        >
          <div className="z-50 absolute top-0 left-0 flex justify-end xl:justify-center items-center h-full w-full overflow-hidden    ">
            <motion.div
              variants={firstLoadAnimation2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="  "
            >
              <Image
                alt="brand logo"
                src={BrandLogo}
                className="object-contain h-12 w-12 hover:scale-150 transition ease-in-out duration-700"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Loader;
