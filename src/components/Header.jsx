import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
export default function Header() {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link href="/">
            <h1 className='text-4xl font-semibold'>
                Younes <span className='text-[#00e187]'>.</span>
            </h1>
            </Link>
            <div className='hidden xl:flex'>
            <Navbar />
            <Link href={"/contact"} className='ml-10 '>
            <Button>
                Hire me
            </Button>
            </Link>
            </div>
            <div className='xl:hidden'>
                <MobileNav />
            </div>
        </div>
    </header>
  )
}
