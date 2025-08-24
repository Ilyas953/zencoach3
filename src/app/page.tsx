"use client";
import { ReactNode} from "react";
import { useRef } from "react";
import Image from "next/image";
import {  JetBrains_Mono } from "next/font/google";
import { Icon } from '@iconify/react';
import { Headline, HeroContent } from "./section1";
import {motion, useInView} from 'framer-motion';
import "./globals.css";









export default  function Home() {

type CardProps = {
  children: ReactNode,
  className: string;
};




function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Card({children, className}: CardProps) {

   const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
       <motion.div ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {opacity:0, y:10}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={` relative  hover:bg-gradient-to-br  bg-gradient-to-b from-[#2A2A2A] to-[#1E1E1E] border-white border-[1px] rounded-[12px]  flex flex-col px-8 py-6 items-center justify-start text-center ${className} `}>
         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#1E1E1E]/20 to-[#ff6b35] transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-50"></div>
          {children}
            </motion.div>
    </>
  )
}
 
function CardBard() {

  return (
    <div className=" flex flex-col lg:row-start-8 my-12 lg:row-end-13 lg:col-span-full  lg:grid lg:grid-cols-12 gap-6">
         <Card className="h-full lg:col-span-4 gap-8">
          <p className="text-2xl font-semibold">Une alimentation suivi</p>
          <p className="text-[16px]">Un plan nutritionnel personnalisé, pensé pour nourrir ton corps et ton esprit. Ensemble, on établit des habitudes saines qui respectent ton rythme de vie pour t’accompagner durablement vers tes objectifs.</p>
         </Card>
         <Card className="h-full lg:col-span-4 gap-8">
          <p className="text-2xl font-semibold">Un accompagnement mental</p>
          <p className="text-[16px]">Plus qu’un coach, un guide pour cultiver ta sérénité et ta motivation. On travaille ensemble ton état d’esprit zen, ta confiance et ta résilience pour que chaque pas vers ton objectif soit un vrai moment de paix intérieure.</p>
         </Card>
         <Card className="h-full lg:col-span-4 gap-8">
           <p className="text-2xl font-semibold">Un coaching adapte a vos objectifs</p>
          <p className="text-[16px]">Chaque parcours est unique, c’est pourquoi ton coaching est entièrement personnalisé. Qu’il s’agisse de prise de masse, perte de poids ou bien-être général, ton programme évolue avec toi, pour toujours mieux répondre à tes besoins.</p>
         </Card>
            
           </div>
  )
}



 


function Footer() {
  return (
    <footer className=" w-full h-30 bg-gradient-to-bl from-[#1e1e1e] via-[#1e1e1e]  to-[#ff6b35] text-white py-6 px-8 flex flex-row  ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} ZenCoach. Tous droits réservés.</p>
        
        <nav className="flex gap-6 text-sm">
          <a href="#presentation" className="hover:text-[#FF6B35]">Présentation</a>
          <a href="#coaching" className="hover:text-[#FF6B35]">Coaching</a>
          <a href="#accueil" className="hover:text-[#FF6B35]">Accueil</a>
        </nav>
      </div>
      
    </footer>
  );
}

function Long() {

    return (
      <>
      <div className=" bg-gradient-to-bl from-black via-[#1E1E1E] to-[#ff6b35] rounded-xl border-[1px] flex flex-col lg:row-start-3 my-12 lg:row-end-9 lg:col-span-full px-6 lg:py-6 lg:grid lg:grid-cols-12 lg:gap-0 gap-12 pb-6 lg:items-start items-center">
          <Image 
         src="/image2.png"
         alt="portrait du second coach"
         width={319}
         height={472}
         className="lg:absolute lg:-my-40 top-[1520px] lg:top-[1217] left-6 " />
          <p className="text-2xl col-start-4 col-end-6 h-fit ">Decouvrez ZenCoach, un coach passionné, à l&apos;écoute de vos besoins, prêt à vous accompagner avec expertise et bienveillance pour révéler le meilleur de vous-même.</p>

          <div className="lg:flex lg:flex-row flex flex-col gap-6  col-start-9 col-end-13 p-0 ">
          <Card className=" w-full  col-end-13 gap-6">
            <div className="flex flex-col gap-3">
          <p className="text-xl"> Matthieu</p>
          <div className="flex flex-row gap-3">
            <Icon icon="material-symbols:star" width="32" height="32" color="yellow" />
            <Icon icon="material-symbols:star" width="32" height="32" color="yellow"  />
            <Icon icon="material-symbols:star" width="32" height="32" color="yellow"  />
            <Icon icon="material-symbols:star" width="32" height="32" color="yellow" />
            <Icon icon="material-symbols:star" width="32" height="32" color="yellow" />
          </div>
          </div>
          <p className="text-[16px]">en un ans j&apos;ai accompli les objectifs sur lesquels je stagnais, la methodologie de Zencoach est plaisante et professionnel</p>
         </Card>
         <Card className=" w-full h-full col-end-13 gap-6">
            <div className="flex flex-col gap-3">
          <p className="text-xl">Julien</p>
          <div className="flex flex-row gap-3">
            <Icon icon="material-symbols:star" width="32" height="32" color="yellow" />
            <Icon icon="material-symbols:star" width="32" height="32" color="yellow"  />
            <Icon icon="material-symbols:star" width="32" height="32" color="yellow"  />
            <Icon icon="material-symbols:star" width="32" height="32" color="yellow" />
            <Icon icon="material-symbols:star" width="32" height="32" color="yellow" />
          </div>
          </div>
          <p className="text-[16px]">Depuis le debut du coaching j&apos;ai repris gout au sport et j&apos;ai de nouveau confiance en moi. Zencoach m&apos;a appris la discipline</p>
         </Card>

         
         </div>

        </div>
      </>
    )
  }


  return (
    <>
    
   
      <div className="flex flex-col gap-0 w-full ">
        
      <div id='accueil' className="h-[160vh] lg:h-[100vh] w-full bg-gradient-to-b from-[#1E1E1E] to-black grid grid-cols-12 grid-rows-12 gap-[24px] px-[32px] py-[24px] text-white ">
        <Headline/>
        <HeroContent />
        
         <Image
         src="/fondhero.png"
         alt="fond pour le coach"
         width={676}
         height={510}
         
         className="  row-start mt-25  lg:row-start-6 lg:row-end-13   lg:col-start-9 lg:col-end-13 col-span-full lg:opacity-100 opacity-0 lg:w-[676px] lg:h-[510px]  h-[262px] " />
        <Image 
         src="/imagehero.png"
         alt="portrait du coach"
         width={580}
         height={679}
         className="absolute lg:bottom-0 lg:left-7/12 left-2/12 top-[695px] lg:top-70 lg:w-[580px] lg:h-[679px] w-[256px] h-[313px] " />
      </div>
      
       <div id="presentation" className="lg:h-[100vh] w-full bg-gradient-to-b from-[#1E1E1E] to-black lg:grid lg:grid-cols-12 lg:grid-rows-12 gap-6 px-[32px] py-[24px] text-white ">
        <h2 className="lg:col-span-full lg:row-start-2 text-center lg:text-[48px] text-[32px] font-semibold">Un coach qui s&apos;adapte a vous</h2>
        
        <Long />
        
        <CardBard />         
       </div>
       

      

 <div id="coaching" className="lg:h-[100vh] h-[190vh] w-full bg-gradient-to-b from-[#1E1E1E] to-black grid grid-cols-12 grid-rows-12 gap-[24px] px-[32px] py-[24px] text-white ">
            
            <div className="col-span-full lg:row-start-2 row-start-1 flex flex-col gap-12">
            <h2 className=" text-center lg:text-[48px] text-[32px] font-semibold">Comment se passe le coaching avec Zencoach</h2>
            <div className="flex flex-col gap-6">
              <Card className="h-fit gap-6 ">
                <div className="flex flex-row gap-4 items-center justify-center">
                  <Icon icon="material-symbols:communication" width={48} height={48} color="#FF6B35" />
                  <p className="text-2xl font-semibold">Echange de depart</p>
                 
                </div>
                 <p className="text-[16px]">Avec ZenCoach, tout commence par un échange personnalisé. On discute de tes objectifs, ton mode de vie, et tes attentes pour construire ensemble une base solide et motivante.</p>
              </Card>

              <Card className="h-full gap-6">
                <div className="flex flex-row gap-4 items-center justify-center">
                  <Icon icon="grommet-icons:plan" width={48} height={48} color="#FF6B35" />
                  <p className="text-2xl font-semibold">Plan sur-mesure</p>
                </div>
                 <p className="text-[16px]">Chaque corps est unique, ton plan aussi. ZenCoach élabore un programme adapté à ton profil et tes objectifs, mêlant exercices, alimentation et conseils bien-être.</p>
              </Card>

              <Card className="h-full gap-6">
                <div className="flex flex-row gap-4 items-center justify-center">
                  <Icon icon="icon-park-outline:sport" width={48} height={48} color="#FF6B35" />
                  <p className="text-2xl font-semibold">Coaching et Seance</p>
                 
                </div>
                 <p className="text-[16px]">C&apos;est le moment d&apos;agir ! ZenCoach t&apos;accompagne lors de séances motivantes et personnalisées, en présentiel ou à distance, pour te guider et t&apos;aider à progresser efficacement.</p>
              </Card>

              <Card className="h-full gap-6">
                <div className="flex flex-row gap-4 items-center justify-center">
                  <Icon icon="mdi:graph-line" width={48} height={48} color="#FF6B35" />
                  <p className="text-2xl font-semibold">Suivi et Evaluation</p>
                 
                </div>
                 <p className="text-[16px]">On avance ensemble, pas à pas. ZenCoach assure un suivi régulier, ajuste ton programme et célèbre chaque victoire, pour que tu restes sur la bonne voie vers tes objectifs.</p>
              </Card>
               
            </div>
            
             </div>

  </div>
  
   <div id="contact" className="h-[120vh] lg:h-[100vh] w-full bg-gradient-to-b from-[#1E1E1E] to-black grid grid-cols-12 grid-rows-12 gap-[24px]  text-white lg:px-0 lg:py-0  ">
            
           <div className="flex flex-col justify-between col-span-full row-span-full row-start-2">
            <AnimatedSection>
           <div className="col-span-full row-start-4 flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col gap-4 items-center">
                <h2 className="text-center lg:text-[48px] text-[32px] font-semibold">Pret a transformer ton corps avec ZenCoach ?</h2>
                <h3 className="lg:text-[32px] text-[24px] text-center">Contacte moi des maintenant pour commencer</h3>
                </div>

                <button onClick={() => window.location.href = "mailto:contact@zencoach.com?subject=Demande%20de%20renseignement&body=Bonjour%20ZenCoach,"} className=" transition-all duration-300 ease-in-out w-fit  justify-center items-center lg:px-[128px] px-[15px] py-[15px]  rounded-[8px] bg-[#FF6B35] lg:text-[32px] text-[20px] flex flex-row gap-3 hover:shadow-[var(--shadow-glow)] hover:-mx-5">Envoyer un mail a zencoach</button>
                <p className="text-[32px]">voir aussi</p>
                <div className="flex lg:flex-row flex-col gap-8 items-center"> 
                    <a href="https://www.instagram.com" 
  target="_blank"  className="  w-[198px] flex flex-row gap-3 border-1 border-white rounded-lg px-5 py-[15px] hover:bg-[#ff6b35] hover:border-black/0 transition-color duration-300 ease-in-out group hover:text-black">
                      <Icon icon="mdi:instagram" width={32} height={32}  className="transition-color transition-color duration-300 ease-in-out text-[#ff6b35] group-hover:text-black" />
                      <p className="transition-all duration-300 ease-in-out text-[20px] ">Instagram</p>
                    </a>
                  <a href="https://www.youtube.com" 
  target="_blank"  className=" w-[198px] justify-center flex flex-row gap-3 border-1 border-white rounded-lg px-5 py-[15px] hover:bg-[#ff6b35] hover:border-black/0 transition-color duration-300 ease-in-out group hover:text-black">
                    <Icon icon="mdi:youtube" width={32} height={32} className="transition-color transition-color duration-300 ease-in-out text-[#ff6b35] group-hover:text-black" />
                    <p className="text-[20px]">Youtube</p>
                  </a>
                  <a href="https://www.tiktok.com" 
  target="_blank"  className=" w-[198px] justify-center flex flex-row gap-3 border-1 border-white rounded-lg px-5 py-[15px] hover:bg-[#ff6b35] hover:border-black/0 transition-color duration-300 ease-in-out group hover:text-black">
                    <Icon icon="ic:baseline-tiktok" width={32} height={32} className="transition-color transition-color duration-300 ease-in-out text-[#ff6b35] group-hover:text-black" />
                    <p className="text-[20px]">Tiktok</p>
                  </a>
                </div>

            
           </div>
           </AnimatedSection>
            <Footer />
        </div>
        
   </div>
  
   </div>


     
     
    
   
    </>
    
  )
}
