"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
export default function MobileNav() {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#00ff99]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-0 mb-32 text-centet text-2xl">
        <Link href="/">
        <h1 className="text-center">
            Younes <span className="text-[#00ff99]">.</span>
        </h1>
        </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-12">
            {links.map(( val, i )=>{
                return <Link href={val.path} key={i} className={`${val.path ===pathName&&"text-[#00ff99] border-b-2 border-[#00ff99]"}text-xl capitalize hover:text-[#00ff99] transition-all`}>{val.name}</Link>
            })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
