"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const links = [
    {
        name:"home",
        path:"/",
    },
    {
        name:"services",
        path:"/services",
    },
    {
        name:"resume",
        path:"/resume",
    },
    {
        name:"work",
        path:"/work",
    },
    {
        name:"contact",
        path:"/contact",
    },
] 
export default function Navbar() {
    const pathName = usePathname()    
  return (
    <nav className='flex gap-8'>
        {links.map((val, i)=>{
          return <Link href={val.path} className={`${val.path ===pathName&&"text-[#00ff99] border-b-2 border-[#00ff99]"} capitalize font-medium hover:text-[#00e187] transition-all`} key={i}>{val.name}</Link>  
    })}
    </nav>
  )
}

