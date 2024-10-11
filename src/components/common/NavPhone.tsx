/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/images/company-logo/company-logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const NavPhone = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />

      <AnimatePresence>
        {active && <LinksOverlay setActive={setActive} />}
      </AnimatePresence>
    </>
  );
};

const LinksOverlay = ({ setActive }: { setActive: any }) => {
  return (
    <nav className="fixed left-0 top-0 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden   ">
      <Logo />
      <LinksContainer setActive={setActive} />
      {/* <FooterCTAs /> */}
    </nav>
  );
};

const LinksContainer = ({ setActive }: { setActive: any }) => {
  return (
    <motion.div className="space-y-2 pr-8 pl-12 w-full grid grid-cols-1 justify-center items-end gap-6 pt-36 xl:pt-36  ">
      {LINKS.map((l, idx) => {
        return (
          <NavLink key={l.title} href={l.href} idx={idx} setActive={setActive}>
            {l.title}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

const NavLink = ({
  children,
  setActive,
  href,
  idx,
}: {
  children: ReactNode;
  setActive: any;
  href: string;
  idx: number;
}) => {
  const navigator = useRouter();
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          type: "spring",
          mass: 3,
          stiffness: 450,
          damping: 50,
        },
      }}
      exit={{
        opacity: 0,
        x: -10,
        transition: {
          delay: 0.25 + idx * 0.125,
          duration: 0.25,
          type: "spring",
          mass: 3,
          stiffness: 450,
          damping: 50,
        },
      }}
      onClick={() => {
        setActive(false);
        navigator.push(href);
      }}
      className="w-full xl:w-[45%] flex justify-start text-lg md:text-xl  text-white/50 transition-colors hover:text-white  "
    >
      <span className="border-2 border-gold p-2 px-3 h-[2.2rem] rounded-full mr-4 text-sm">
        {idx}
      </span>
      <span className="text-left">{children}</span>
    </motion.button>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.a
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,

        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      exit={{
        opacity: 0,
        y: -12,
        transition: { delay: 0.1, duration: 0.25, ease: "easeInOut" },
      }}
      href="/"
      className="hidden xl:grid absolute top-[35%] right-[20%] h-20 w-20 xl:h-44 xl:w-44 place-content-center rounded-xl transition-colors "
    >
      <Image
        src={logo}
        className="object-contain p-4 hover:scale-150 transition ease-in-out duration-700"
        alt="logo"
      />
    </motion.a>
  );
};

const HamburgerButton = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        className={`fixed z-30    top-0 left-0 bg-secondary-default  `}
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`group -translate-x-4 top-4 z-50 h-20 w-20 scale-[70%] bg-white/0 transition-all hover:bg-white/20 ${
          active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute block h-1 w-10 bg-white z-50"
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute block h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-1 w-5 bg-white"
          style={{ x: "-50%", y: "50%" }}
        />
      </motion.button>
    </>
  );
};

// const FooterCTAs = () => {
//   return (
//     <>
//       <div className="absolute bottom-12 left-12 xl:left-64 gap-6 flex  ">
//         {SOCIAL_CTAS.map((l, idx) => {
//           return (
//             <motion.a
//               key={idx}
//               href={l.href}
//               initial={{ opacity: 0, y: -8 }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 transition: {
//                   delay: 1 + idx * 0.125,
//                   duration: 0.5,
//                   ease: "easeInOut",
//                 },
//               }}
//               exit={{ opacity: 0, y: -8 }}
//             >
//               <l.Component className="text-xl text-white/50 transition-colors hover:text-white" />
//             </motion.a>
//           );
//         })}
//       </div>

//       {/* <motion.button
//         initial={{ opacity: 0, y: 8 }}
//         animate={{
//           opacity: 1,
//           y: 0,
//           transition: {
//             delay: 1.125,
//             duration: 0.5,
//             ease: "easeInOut",
//           },
//         }}
//         exit={{ opacity: 0, y: 8 }}
//         className="absolute bottom-2 xl:left-[30%] w-[200px] flex justify-between items-center gap-2 rounded-full bg-secondary-light px-3 py-3 text-4xl uppercase text-white/50 transition-colors hover:bg-black hover:text-white md:bottom-4 md:right-4 md:px-6 md:text-2xl"
//       >
//         <span className="hidden md:block">contact us</span> <FiArrowRight />
//       </motion.button> */}
//     </>
//   );
// };

const LINKS = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT",
    href: "/#about",
  },
  {
    title: "FOOD AND BEVERAGE MENU",
    href: "/#menu",
  },
  {
    title: "GALLERY",
    href: "/#gallery",
  },
  {
    title: "RESERVATION",
    href: "/#reservation",
  },
  {
    title: "CONTACT",
    href: "/#contact",
  },
];
// const SOCIAL_CTAS = [
//   // {
//   //   Component: SiInstagram,
//   //   href: "#",
//   // },
//   {
//     Component: SiInstagram,
//     href: "https://instagram.com",
//   },
//   {
//     Component: SiLinkedin,
//     href: "https://linkedin.com",
//   },
//   {
//     Component: SiYoutube,
//     href: "https://youtube.com",
//   },
// ];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% )",
    height: "calc(100vh )",
    opacity: 1,
    transition: { type: "spring", mass: 3, stiffness: 150, damping: 50 },
  },
  closed: {
    opacity: 0,
    width: "0px",
    height: "calc(100vh )",
    transition: {
      delay: 1.5,
      type: "spring",
      mass: 3,
      stiffness: 250,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
