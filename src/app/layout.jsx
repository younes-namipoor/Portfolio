import Page from "./page";
import './global.css'
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import PageTransitions from "@/components/PageTransitions";
import StairTarnsitions from "@/components/StairTarnsitions";

const JetBrainsMono = JetBrains_Mono({
  subsets:["latin"],
  weight:['100','200', '300' , '400' , '500','600' ,'700' , '800'],
  variable:'--font-JetBrainsMono'
})


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.className}>
      
      <Header />
      <StairTarnsitions />
      <PageTransitions>
      {children}
      </PageTransitions>
       
      </body>
    </html>
  );
}
