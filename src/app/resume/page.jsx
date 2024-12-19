"use client";
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "motion/react";
import { easeIn } from "motion";
const about = {
  title: "About Me",
  desc: "As a frontend developer, I specialize in building visually appealing and interactive user interfaces that provide an excellent user experience. I work with HTML, CSS, and JavaScript to create responsive, clean, and well-structured websites. My focus is on ensuring that the user interface is intuitive, functional, and optimized across all devices.I m skilled in working with frontend frameworks such as React.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Younes NamiPoor",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+98)9931818722",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Telegram",
      fieldValue: "@yonesnami",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Iran",
    },
    {
      fieldName: "Email",
      fieldValue: "younesnami2@gmail.com",
    },
    {
      fieldName: "Freelancer",
      fieldValue: "Availabale",
    },
    {
      fieldName: "Languages",
      fieldValue: "English , Persian",
    },
  ],
};
const experience = {
  icon: "",
  title: "My Experience",
  desc: "I m skilled in working with frontend frameworks such as React, and I stay up-to-date with the latest industry trends to ensure my designs are modern and user-friendly. I also pay close attention to performance optimization, ensuring fast loading times and a smooth experience for end users.",
  item: [
    {
      company: "Parnian Inc",
      position: "Front-End Developer Intern",
      duration: "Summer 2024",
    },
    {
      company: "Parnian Inc",
      position: "UI/UX Intern",
      duration: "Summer 2024",
    },
    {
      company: "Parnian Inc",
      position: "SEO Intern",
      duration: "Summer 2024",
    },
    {
      company: "Parnian Inc",
      position: "React Intern",
      duration: "Summer 2024",
    },
    {
      company: "Parnian Inc",
      position: "NextJs Intern",
      duration: "Summer 2024",
    },
    {
      company: "Parnian Inc",
      position: "Tailwind Intern",
      duration: "Summer 2024",
    },
  ],
};
const Education = {
  icon: "",
  title: "My Experience",
  desc: "I m skilled HTML , CSS3 , JavaScript , ReactJs , NextJs",
  item: [
    {
      company: "Parnian Inc",
      position: "Front-End Developer",
      duration: "Summer 2024",
    },
  ],
};
const skills = {
  title: "My Skills",
  desc: "All things that i learned until now and i work with them",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "reactjs",
    },
    {
      icon: <SiNextdotjs />,
      name: "nextjs",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2, ease: easeIn },
      }}
      className="min-w-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="1" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="1">Experience</TabsTrigger>
            <TabsTrigger value="2">Education</TabsTrigger>
            <TabsTrigger value="3">Skills</TabsTrigger>
            <TabsTrigger value="4">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent className="w-full" value="1">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.item.map((val, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-[#00ff99]">{val.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {val.position}
                          </h3>
                          <div className=" flex items-center gap-3">
                            <span className="w-[5px] h-[6px] rounded-full bg-[#00ff99]"></span>
                            <p className="text-white/60">{val.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent className="w-full" value="2">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{Education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {Education.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {Education.item.map((val, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-[#00ff99]">{val.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {val.position}
                          </h3>
                          <div className=" flex items-center gap-3">
                            <span className="w-[5px] h-[6px] rounded-full bg-[#00ff99]"></span>
                            <p className="text-white/60">{val.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent className="w-full" value="3">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.desc}
                  </h3>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((val, i) => {
                    return (
                      <li key={i}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="flex w-full h-[150px] justify-center items-center rounded-xl bg-[#232329]">
                              <div className="text-6xl transition-all duration-500 hover:text-[#00ff99]">
                                {val.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{val.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent className="w-full text-center xl:text-left" value="4">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.desc}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]">
                  {about.info.map((val, i) => {
                    return (
                      <li
                        key={i}
                        className="flex justify-center items-center xl:justify-start"
                      >
                        <span className="text-white/60 mr-5">
                          {val.fieldName}
                        </span>
                        <span className="text-xl">{val.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
