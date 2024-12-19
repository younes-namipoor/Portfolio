"use client"
import React from 'react'
import { AnimatePresence , motion } from "motion/react"
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'
export default function StairTarnsitions() {
    const pathName = usePathname()
  return (
    <>
    <AnimatePresence mode='wait'>
    <div key={pathName}>
    <div className='w-screen h-screen fixed top-0 left-0 right-0 flex pointer-events-none z-40'>
    <Stairs />
    </div>
    <motion.div className='h-screen w-screen fixed bg-[#1c1c22] top-0 pointer-events-none'
    initial={{opacity:1}}
    animate={{
        opacity:0,
        transition:{delay:1 , duration:.4,ease:"easeInOut"}
    }} />
    </div>
    </AnimatePresence>
    </>
  )
}
