import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn , FaTelegramPlane ,FaGithub ,FaInstagram   } from "react-icons/fa";
const social =[
    {icon:<FaGithub />, path:"https://github.com/younes-namipoor"},
    {icon:<FaLinkedinIn />, path:"https://www.linkedin.com/in/younes-namipoor"},
    {icon:<FaTelegramPlane />, path:"https://t.me/yonesnami"},
    {icon:<FaInstagram  />, path:"https://www.instagram.com/younes.namipoor"},

]
export default function Social({iconStyle , containerStyle}) {
  return (
    <div className={containerStyle}>
        {social.map((val , i)=>{
            return <Link key={i} href={val.path} className={iconStyle} >{val.icon}</Link>
        })}
    </div>
  )
}
