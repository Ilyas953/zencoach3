import Image from "next/image";  
import {  JetBrains_Mono } from "next/font/google";
import { Icon } from '@iconify/react';
import {motion} from 'framer-motion';
import "./globals.css";
import { useState } from "react";
import { ReactNode} from "react";


const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

 type CardProps = {
   children: ReactNode,
   className: string;
 };
 
function Card({children, className}: CardProps) {

   

  return (
    <>
       <div 
            className={` absolute  hover:bg-gradient-to-br  bg-gradient-to-b from-[#2A2A2A] to-[#1E1E1E] border-white border-[1px] rounded-[12px]  flex flex-col px-8 py-6 items-center justify-start text-center ${className} `}>
         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#1E1E1E]/20 to-[#ff6b35] transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-50"></div>
          {children}
        </div>
    </>
  )
}


export function Headline() {
  const [isActive, setIsActive] = useState(false);

  const icono = isActive ? "mdi:close" : "qlementine-icons:menu-burger-16";

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex items-center justify-between col-span-12 py-4 px-6 relative">
      {/* Logo */}
      <p className={`${jetbrains.className} text-[32px]`}>ZenCoach</p>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-8 text-[16px]">
         <div className="flex flex-col gap-0 group transition-all duration-500 ease-in-out"><a href='#presentation'className="">Presentation</a> <span className=" transition-all duration-300 ease-in-out border-white border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div>
           <div className="flex flex-col gap-0 group transition-all duration-500 ease-in-out"><a href='#coaching'className="">coaching</a> <span className=" transition-all duration-300 ease-in-out border-white border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div>
           <div className="flex flex-col gap-0 group transition-all duration-500 ease-in-out"><a href='#contact'className="">contact</a> <span className=" transition-all duration-300 ease-in-out border-white border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div>
      </div>

      {/* Desktop Button */}
      <a
        href="#contact"
        className="hidden lg:flex items-center justify-center w-[199px] h-[49px] bg-[#FF6B35] text-[16px] rounded-[8px] hover:shadow-[0_0_20px_#FF6B35] transition-all duration-300"
      >
        Réserver une séance
      </a>

      {/* Mobile Burger */}
      <button
        className="lg:hidden"
        onClick={() => setIsActive(prev => !prev)}
      >
        <Icon icon={icono} width={44} height={44} color="#FF6B35" />
      </button>

      {/* Mobile Menu */}
      {isActive && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          transition={{ duration: 0.3 }}
          className="absolute top-full right-0 w-48 bg-[#1E1E1E] rounded-md shadow-lg flex flex-col p-4 gap-4 lg:hidden z-50"
        >
          <a href="#presentation" onClick={() => setIsActive(false)} className="hover:text-[#FF6B35]">Présentation</a>
          <a href="#coaching" onClick={() => setIsActive(false)} className="hover:text-[#FF6B35]">Coaching</a>
          <a href="#contact" onClick={() => setIsActive(false)} className="hover:text-[#FF6B35]">Contact</a>
        </motion.div>
      )}
    </div>
  );
}

export function HeroContent() {

  return (
    <>
    <div className="lg:col-start-2 lg:w-[559px] lg:row-start-4 flex flex-col gap-[32px] col-span-full *:lg:text-left *:text-center row-start-2 lg:mt-0 mt-10 ">


        <div className="flex-col gap-16 lg:row-auto row-span-full lg:col-auto col-span-full">
          <h1 className=" text-[48px] font-bold lg:text-left text-center ">Retrouve ton équilibre et ta Force intérieure</h1>
        <p className="text-[#ADADAD] text-[24px] ">Transformez votre corps, Boostez votre energie</p>
        </div>

        <a href="#contact" className="transition-all duration-200 ease-in-out flex flex-col justify-center items-center px-[10px] py-[15px]  rounded-[8px] bg-[#FF6B35] lg:text-[24px] text-[20px] hover:shadow-[var(--shadow-glow)] hover:-mx-5">Commencez des Maintenant</a>
         <Image
                 src="/fondhero.png"
                 alt="fond pour le coach"
                 width={676}
                 height={510}
                 
                 className="  row-start mt-25  lg:row-start-6 lg:row-end-13   lg:col-start-9 lg:col-end-13 col-span-full opacity-100 lg:hidden lg:w-[676px] lg:h-[510px]  h-[262px] " />
       
       
        <div className="*:text-xl text-[#777777] font-semibold flex flex-col gap-6 *:items-center mt-15">
            <div className="flex flex-row gap-[16px]">
                <Icon icon="mdi:graph-line" width={44} height={44} color="#ff6b35" />
                <p>+150 clients transformés</p>
            </div>
             <div className="flex flex-row gap-[16px] ">
                <Icon icon="material-symbols:star-outline" width={44} height={44} color="#ff6b35" />
                <p>4.8/5 étoiles sur trustpilot</p>
            </div>
             <div className="flex flex-row gap-[16px]">
                <Icon icon="lucide:dumbbell" width={44} height={44} color="#ff6b35" />
                <p>95% d&apos;objectifs clients atteint</p>
            </div>
        </div>
        
        </div>
      

      
    </>
  )

  
}