/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = ({
  setIsModalOpen,
}: {
  setIsModalOpen: any;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-100%"]);
  const isInView = useInView(targetRef, { once: false });

  const reveal = (sequence: number) => {
    return {
      hidden: {
        opacity: 0,
        x: -100,
        scale: 0.5,
      },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          delay: 0.2 * (sequence / 2),
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          ease: "easeInOut",
        },
      },
    };
  };

  return (
    <section
      ref={targetRef}
      className="relative h-[400vh] w-full bg-primary-default"
    >
      <motion.div
        variants={reveal(4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className={`top-12 h-[60vh] md:h-screen flex items-center overflow-hidden  ${
          !isInView ? "hidden" : "block"
        }`}
        animate={isInView ? { position: "fixed" } : { position: "relative" }}
      >
        <motion.div
          style={{ x }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex   p-6 "
        >
          <div className="flex flex-col  justify-center items-start gap-8 h-[450px] xl:h-[85vh] w-full xl:w-[50vw]  ">
            <div className="text-left">
              <span className="text-7xl font-junge font-semibold text-gold">
                Product
              </span>
            </div>
            <div className="text-left pl-2">
              <span className="text-base font-junge font-semibold text-secondary-default ">
                All our products are of high commercial importance and
                <br />
                They meet all quality standards, making us the
                <br />
                best commercial tableware supplier. We are the best choice for
                use
                <br />
                commercial and domestic.
              </span>
            </div>
          </div>
          {cards.map((card) => {
            return (
              <Card setIsModalOpen={setIsModalOpen} card={card} key={card.id} />
            );
          })}
        </motion.div>
      </motion.div>
    </section>
    // <section
    //   ref={targetRef}
    //   className="relative top-0 h-[300vh] py-8 bg-[#E8E6E0]"
    // >
    //   <motion.div
    //     className={` sticky top-12 left-0 flex h-screen items-center overflow-hidden`}
    //   >
    //     <motion.div style={{ x }} className="flex gap-4 ">
    //       <div className="flex flex-col  justify-center items-start gap-8 h-[450px] w-[850px] ml-[1700px]  ">
    //         <div className="text-left">
    //           <span className="text-7xl font-junge font-semibold text-gold">
    //             Product
    //           </span>
    //         </div>
    //         <div className="text-left pl-2">
    //           <span className="text-base font-junge font-semibold text-secondary-default ">
    //             All our products are of high commercial importance and
    //             <br />
    //             They meet all quality standards, making us the
    //             <br />
    //             best commercial tableware supplier. We are the best choice for
    //             use
    //             <br />
    //             commercial and domestic.
    //           </span>
    //         </div>
    //       </div>
    //       {cards.map((card) => {
    //         return <Card card={card} key={card.id} />;
    //       })}
    //     </motion.div>
    //   </motion.div>
    // </section>
  );
};

const Card = ({
  card,
  setIsModalOpen,
}: {
  card: CardType;
  setIsModalOpen: any;
}) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] xl:h-[85vh] w-full xl:w-[45vw] px-12 overflow-hidden bg-neutral-200 border-l-2  border-secondary-default"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 scale-105 group-hover:scale-100 group-hover:translate-y-2  ease-in-out   rounded-t-full ml-16 mr-16 mt-16"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="border-[3px] border-gold transition-all hover:bg-secondary-default duration-300 ease-in-out cursor-pointer w-[100px] rounded-full p-8 px-[3.5rem] flex hover:scale-125 hover:border-none justify-center item-center "
        >
          Reserve
          <br />
          Now!
        </button>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    title: "Title 7",
    id: 7,
  },
];
