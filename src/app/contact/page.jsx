"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Icon } from "lucide-react";

const info = [
  {
    Icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "(+98)9931818722",
  },
  {
    Icon: < FaEnvelope/>,
    title: "Email",
    desc: "yonesnami2@gmail.com",
  },
  {
    Icon: <FaMapMarkerAlt />,
    title: "Address",
    desc: "Alborz,karaj",
  },
];
import { motion } from "motion/react";
export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none mb-10 xl:mb-0">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-[#00ff99]">Lets Work together</h3>
              <p className="text-white/60">
                I will be happy to work with you and strat a new path with new
                people
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="FirstName" placeholder="FirstName" />
                <Input type="LastName" placeholder="LastName" />
                <Input type="Email" placeholder="Email" />
                <Input type="Phone" placeholder="Phone" />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Type your massage here"
              />
              <Button size="lg" className="max-w-40">
                send massage
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((val, i) => {
                return (
                  <li className="flex items-center gap-6" key={i}>
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#00ff99] rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{val.Icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{val.title}</p>
                      <h3 className="text-xl">{val.desc}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
