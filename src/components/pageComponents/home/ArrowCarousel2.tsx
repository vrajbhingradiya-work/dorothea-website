"use client";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import useMeasure from "react-use-measure";
import { HiOutlineArrowNarrowLeft as LeftArrow } from "react-icons/hi";
import { HiOutlineArrowNarrowRight as RightArrow } from "react-icons/hi";
const CARD_WIDTH = 480;
const MARGIN = 149;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const ImageCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = useCallback(() => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => pv - CARD_SIZE); // Simplified state update logic
  }, [CAN_SHIFT_RIGHT]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      shiftRight();
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [shiftRight]);

  return (
    <section className="bg-primary-default py-8 pb-16" ref={ref}>
      <div className="relative overflow-hidden py-24">
        <div className="absolute top-0 left-0 h-[75%] w-[30%] z-20 bg-primary-default/50"></div>
        <div className="absolute top-0 right-0 h-[75%] w-[25%] z-20 bg-primary-default/50"></div>
        <div className="mx-auto max-w-6xl xl:overflow-hidden">
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
          <div className="flex items-center justify-end xl:pr-72 xl:pt-16 py-8 absolute z-30 xl:-my-16 bottom-0 right-0  ">
            <div className="flex justify-end items-center gap-2">
              <button
                title="button"
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
                className={`transition-all ease-in-out text-secondary-default hover:-translate-x-4 hover:text-gold duration-300  hover:bg-white rounded-full  p-6 -mb-4 xl:mb-12     flex justify-center items-center ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
              >
                <LeftArrow className="w-8 h-6" />
              </button>

              <button
                title="button"
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
                className={` transition-all ease-in-out text-secondary-default hover:translate-x-4 hover:text-gold duration-300  hover:bg-white rounded-full p-6 -mb-4 xl:mb-12    flex justify-center items-center ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
              >
                <RightArrow className="w-8 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, author, title }: PostType) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 translate-x-[75%]"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <motion.img
        src={imgUrl}
        className="mb-3 h-[300px] w-full rounded-lg object-contain hover:scale-105 "
        alt={`An image for a fake blog post titled ${title}`}
      />
      <p className="font-junge text-gold text-xl md:text-5xl w-full text-center rounded-lg  font-semibold">
        {author}
      </p>
    </div>
  );
};

export default ImageCarousel;

type PostType = {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
};

const posts: PostType[] = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "John Anderson",
    title: "We built an AI chess bot with ChatGPT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Jess Drum",
    title: "A quick guide to Framer Motion (for dummies)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Phil White",
    title: "You probably don't need kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Karen Peabody",
    title: "State of JavaScript in 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Dante Gordon",
    title: "What's new in Python?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "John Anderson",
    title: "We built an AI chess bot with ChatGPT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Jess Drum",
    title: "A quick guide to Framer Motion (for dummies)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Phil White",
    title: "You probably don't need kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Karen Peabody",
    title: "State of JavaScript in 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Dante Gordon",
    title: "What's new in Python?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "John Anderson",
    title: "We built an AI chess bot with ChatGPT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Jess Drum",
    title: "A quick guide to Framer Motion (for dummies)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Phil White",
    title: "You probably don't need kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Karen Peabody",
    title: "State of JavaScript in 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Dante Gordon",
    title: "What's new in Python?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "John Anderson",
    title: "We built an AI chess bot with ChatGPT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Jess Drum",
    title: "A quick guide to Framer Motion (for dummies)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Phil White",
    title: "You probably don't need kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Karen Peabody",
    title: "State of JavaScript in 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Dante Gordon",
    title: "What's new in Python?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "John Anderson",
    title: "We built an AI chess bot with ChatGPT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Jess Drum",
    title: "A quick guide to Framer Motion (for dummies)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Phil White",
    title: "You probably don't need kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Karen Peabody",
    title: "State of JavaScript in 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Dante Gordon",
    title: "What's new in Python?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "John Anderson",
    title: "We built an AI chess bot with ChatGPT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Jess Drum",
    title: "A quick guide to Framer Motion (for dummies)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Phil White",
    title: "You probably don't need kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Karen Peabody",
    title: "State of JavaScript in 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    author: "Dante Gordon",
    title: "What's new in Python?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];
