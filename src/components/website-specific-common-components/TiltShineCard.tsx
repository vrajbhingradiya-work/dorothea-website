import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  // useTransform,
} from "framer-motion";
import SlideInFromBottom from "../utils/SlideInFromBottom";

const ROTATION_RANGE = 35;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const PERSPECTIVE = "1500px";

export const TiltShineCard = ({
  sequence,
  text,
}: {
  sequence: number;
  text: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  // const sheenOpacity = useTransform(
  //   ySpring,
  //   [-HALF_ROTATION_RANGE, 0, HALF_ROTATION_RANGE],
  //   [0.5, 0, 0.5]
  // );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{
        perspective: PERSPECTIVE,
      }}
      className="absolute inset-0 grid place-content-center overflow-visible"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
        className="relative aspect-[4/4] w-[440px] flex justify-center items-center  shadow-2xl shadow-zinc-950 transform border-[1px] border-white p-2"
      >
        {/* <motion.div
          style={{
            opacity: sheenOpacity,
          }}
          className="absolute inset-0 bg-gradient-to-br from-zinc-300/50 via-zinc-300 to-zinc-300/50"
        /> */}
        <div className="absolute z-10 bg-white h-[97%] w-[90%]">
          <div className="w-full xl:[w-400px] h-full p-4 flex justify-center items-center">
            <SlideInFromBottom sequence={sequence}>
              <span className="w-full flex  flex-wrap text-center justify-center items-center xl:w-[400px]">
                {text.split(" ").map((word, index) => (
                  <SlideInFromBottom key={index} sequence={index}>
                    <span className=" f justify-center items-center px-2">
                      {word}
                    </span>
                  </SlideInFromBottom>
                ))}
              </span>
            </SlideInFromBottom>
          </div>
        </div>
        <div className="bg-white h-[95%] w-[100%]"></div>
      </motion.div>
    </div>
  );
};
