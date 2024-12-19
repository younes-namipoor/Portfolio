"use client";
import { motion } from "motion/react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlider from "@/components/WorkSlider";
const project = [
  {
    num: "01",
    cat: "frontend",
    title: "Project 1",
    desc: "this is a mini project",
    stack: [{ name: "Html5" }, { name: "Css3" }],
    img: "https://uploadkon.ir/uploads/3a8b19_242.png",
    live: "https://younes-namipoor.github.io/mini-project-html-css/",
    git: "https://github.com/younes-namipoor/mini-project-html-css?tab=readme-ov-file",
  },
  {
    num: "02",
    cat: "frontend",
    title: "Project 2",
    desc: "this Responsive Project",
    stack: [{ name: "Html5" }, { name: "Css3" }],
    img: "https://uploadkon.ir/uploads/192019_243.png",
    live: "https://younes-namipoor.github.io/Responsive-Project/",
    git: "https://github.com/younes-namipoor/Responsive-Project",
  },
  {
    num: "03",
    cat: "frontend",
    title: "Project 3",
    desc: "this is a JavaScript Calcutor",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    img: "https://uploadkon.ir/uploads/708c19_244.png",
    live: "https://younes-namipoor.github.io/Calcutor/",
    git: "https://github.com/younes-namipoor/Calcutor",
  },
  {
    num: "04",
    cat: "frontend",
    title: "Project 4",
    desc: "A To Do List",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    img: "https://uploadkon.ir/uploads/4e8719_245.png",
    live: "https://younes-namipoor.github.io/To-do-List/",
    git: "https://github.com/younes-namipoor/To-do-List?tab=readme-ov-file",
  },
  {
    num: "05",
    cat: "frontend",
    title: "Project 5",
    desc: "Parallax Site",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    img: "https://uploadkon.ir/uploads/10d419_246.png",
    live: "https://younes-namipoor.github.io/Parallax/",
    git: "https://github.com/younes-namipoor/Parallax",
  },
  {
    num: "06",
    cat: "frontend",
    title: "Project 6",
    desc: "Music Player",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    img: "https://uploadkon.ir/uploads/76d919_247.png",
    live: "https://younes-namipoor.github.io/Music-player/",
    git: "https://github.com/younes-namipoor/Music-player",
  },
  {
    num: "07",
    cat: "frontend",
    title: "Project 7",
    desc: "Card Bank",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    img: "https://uploadkon.ir/uploads/156719_248.png",
    live: "https://younes-namipoor.github.io/Card-bank/",
    git: "https://github.com/younes-namipoor/Card-bank?tab=readme-ov-file",
  },
  {
    num: "08",
    cat: "frontend",
    title: "Project 8",
    desc: "Crypto",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    img: "https://uploadkon.ir/uploads/ee9519_249.png",
    live: "https://younes-namipoor.github.io/Crypto/",
    git: "https://github.com/younes-namipoor/Crypto",
  },
  {
    num: "09",
    cat: "frontend",
    title: "Project 9",
    desc: "CURD",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    img: "https://uploadkon.ir/uploads/7aa019_2410.png",
    live: "https://younes-namipoor.github.io/SignUp-SignIn/",
    git: "https://github.com/younes-namipoor/SignUp-SignIn",
  },
];
export default function Works() {
  const [pro, setPro] = useState(project[0]);
  const slideChange = (swiper) => {
    const cuItem = swiper.activeIndex;
    setPro(project[cuItem]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text1 text-white/">
                {pro.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none duration-500 capitalize transition-all hover:text-[#00ff99]">
                {pro.cat}
              </h2>
              <p className="text-white/60">{pro.desc}</p>
              <ul className="flex gap-4">
                {pro.stack.map((val, i) => {
                  return (
                    <li key={i} className="text-[#00ff99]">
                      {val.name}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 h-[50%]">
                <Link href={pro.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center ">
                        <BsArrowUpRight className="text-white text-3xl hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Link Demo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={pro.git}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center ">
                        <BsGithub className="text-white text-3xl hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Git Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              onSlideChange={slideChange}
              slidesPerView={1}
              className="xl:-[520px] mb-12"
            >
              {project.map((val, i) => {
                return (
                  <SwiperSlide className="w-full" key={i}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20:">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={val.img} alt="" fill className="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSlider
                containerStyle="flex gap-2 mt-5 gap-20 right-0  xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyle="bg-[#00ff99] text-[#1c1c22] text-[22px] w-[44px] h-[44px] justify-center items-center transition-all flex rounded-[5px]"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
