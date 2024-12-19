"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "motion/react";

const service = [
  {
    num: "01",
    title: "Web Development",
    desc: " professional who focuses on creating user-centered designs to ensure digital products are both visually appealing and easy to use. They work at the intersection of technology, psychology, and design to enhance the overall user experience (UX) while crafting intuitive user interfaces (UI).",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "professional who designs, builds, and maintains websites and web applications. They combine technical expertise with creativity to ensure websites are functional, visually appealing, and user-friendly. Web developers are responsible for the structure and performance of a site, focusing on its responsiveness, speed, and security.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Designer",
    desc: "creative professional specializing in crafting visual symbols that represent a brands identity, values, and purpose. They blend artistic skill with strategic thinking to design logos that are memorable, versatile, and reflective of the brand s essence. A logo is often the first impression of a business, making the designers role crucial in establishing a strong visual identity",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    desc: "professional responsible for optimizing websites to improve their visibility on search engine results pages (SERPs). By understanding how search engines like Google, Bing, or Yahoo rank content, an SEO expert helps businesses attract more organic traffic, enhance user engagement, and achieve their digital marketing goals",
    href: "",
  },
];
export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center p-12 xl:py-0">
      <div className="mx-auto container">
        <motion.div
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
        >
          {service.map((val, i) => {
            return (
              <div
                key={i}
                className="flex-1 flex flex-col justify-center gap-6 group "
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-white text-5xl font-extrabold text1 text-transparent group-hover:text2 transition-all duration-500">
                    {val.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={val.href}
                  >
                    <BsArrowDownRight className="text-[#1c1c22] text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 ">
                  {val.title}
                </h2>
                <p className="text-white/60">{val.desc}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
