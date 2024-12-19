"use client";
import React from "react";
import CountUp from "react-countup";
const state = [
  {
    num: 1,
    text: "Years of Experience",
  },
  {
    num: 30,
    text: "Project Compeleted",
  },
  {
    num: 10,
    text: "Technologies Mastered",
  },
  {
    num: 500,
    text: "Code Commits",
  },
];
export default function States() {
  return (
    <section className="pt-4 pb-12 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {state.map((val, i) => {
            return (
              <div className="flex flex-1 gap-3 justify-center items-center xl:justify-start" key={i}>
                <CountUp
                  end={val.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                /><span className="text-[40px]">+</span>
                <p className="max-w-[100px] leading-snug text-white/80">{val.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
