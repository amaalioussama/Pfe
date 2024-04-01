"use client";
import Image from "next/image";
import elemnt from "../../../public/openai.png";
import elemnt2 from "../../../public/scale.png";
import elemnt3 from "../../../public/x.png";
import elemnt4 from "../../../public/Microsoft.png";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
const  Tools = () => {
    useEffect(() =>{
      Aos.init({ duration: "1000" });
    }, []);
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b  from-black to-red-950 ">
      <div className="mt-80" >
     <h1 className="mt-80 text-3xl text-white font-bold font-serif uppercase bg-clip-text" data-aos="fade-up">
     
     <span className='text-slate-300'>AI-</span>
     <span className='text-slate-300'>POWERED &nbsp;</span>
     <span className='text-red-800'> CHATBOT&nbsp;</span>
   </h1>
   </div>
   <div className="mt-20" >
   <div className="ml-9 flex" data-aos="fade-up">
   <Image src={elemnt} alt="OpenAI Logo" className="h-auto w-auto" />
  
   <div className="ml-36 mb-9">
     
   <h1 className="text-3xl text-white font-bold font-serif uppercase bg-clip-text " data-aos="fade-up">
 <span className='text-3xl font-normal font-advent-pro uppercase bg-gradient-to-t from-gray-300 to-transparent bg-clip-text text-transparent flex items-center ml-28'>OPENAI</span>
</h1>
           <p className='text-wrap text-base font-bold  mt-4  leading-8 uppercase text-slate-300 whitespace-pre-line' data-aos="fade-up">
           OpenAI, founded to advance digital <br className="sm:hidden md:inline" />
           intelligence for humanity's benefit,  <br className="sm:hidden md:inline" />
           consists of a for-profit entity, OpenAI LP, <br className="md:hidden lg:inline" />
           and its non-profit parent, OpenAI Inc. It <br className="lg:hidden xl:inline" />
           conducts research to ensure AGI benefits  <br className="lg:hidden xl:inline" />
           society, avoiding harmful applications or <br className="md:hidden lg:inline" />
           
           
             <span className="tracking-wider"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             power concentration. </span>
           </p>
           
         </div>
         </div>
         </div>
         <div className="mt-16" >
         <div className="ml-9 flex" data-aos="fade-up">
         <Image src={elemnt3} alt="OpenAI Logo" className="h-auto w-auto" />
    
         <div className="ml-36 mb-9">
         <h1 className=" text-3xl text-white font-bold font-serif uppercase bg-clip-text" data-aos="fade-up">
     <span className='text-3xl font-normal font-advent-pro uppercase bg-gradient-to-t from-gray-300 to-transparent bg-clip-text text-transparent flex items-center ml-40' >X</span>
   </h1>
           <p className='text-wrap text-base font-bold  mt-4  leading-8 uppercase text-slate-300 whitespace-pre-line' data-aos="fade-up">
           it is a popular social media platform that <br className="sm:hidden md:inline" />
           allows users to share short messages  <br className="sm:hidden md:inline" />
           called tweets. Twitter is widely used for  <br className="md:hidden lg:inline" />
           real-time information sharing, social <br className="lg:hidden xl:inline" />
           networking, and connecting with others  <br className="lg:hidden xl:inline" />
           Users can follow accounts, receive  <br className="md:hidden lg:inline" />
           updates from those they follow, and   <br className="lg:hidden xl:inline" />
           engage in conversations through tweets,  <br className="lg:hidden xl:inline" />
          
             <span className="tracking-wider"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             retweets, and likes. </span>
           </p>
           </div>
           </div>
           </div>
           <div className="mt-16" >
           <div className="ml-9 flex" data-aos="fade-up">
           <Image src={elemnt4} alt="OpenAI Logo" className="h-auto w-auto" />
         
        
         <div className="ml-36 mb-9">
         <h1 className=" text-3xl text-white font-bold font-serif uppercase bg-clip-text" data-aos="fade-up">
     <span className='text-3xl font-normal font-advent-pro uppercase bg-gradient-to-t from-gray-300 to-transparent bg-clip-text text-transparent flex items-center ml-20'>Microsoft</span>
   </h1>
           <p className='text-wrap text-base font-bold  mt-4  leading-8 uppercase text-slate-300 whitespace-pre-line' data-aos="fade-up">
           Microsoft Corporation is a multinational  <br className="sm:hidden md:inline" />
           technology company that is one of the   <br className="sm:hidden md:inline" />
           world's largest and most influential   <br className="md:hidden lg:inline" />
           technology companies. Founded by Bill <br className="lg:hidden xl:inline" />
           Gates and Paul Allen in 1975, Microsoft is <br className="lg:hidden xl:inline" />
           headquartered in Redmond, Washington.  <br className="md:hidden lg:inline" />
           </p>
         </div>
         </div>
         </div>
         <div className="mt-16" >
         <div className="ml-9 flex" data-aos="fade-up">
           <Image src={elemnt2} alt="OpenAI Logo" className="h-auto w-auto" />
         
        
         <div className="ml-36 mb-9">
         <h1 className=" text-3xl text-white font-bold font-serif uppercase bg-clip-text" data-aos="fade-up">
     <span className='text-3xl font-normal font-advent-pro uppercase bg-gradient-to-t from-gray-300 to-transparent bg-clip-text text-transparent flex items-center ml-28'>scale</span>
   </h1>
           <p className='text-wrap text-base font-bold  mt-4  leading-8 uppercase text-slate-300 whitespace-pre-line' data-aos="fade-up">
           OpenAI's Scale offers data annotation  <br className="sm:hidden md:inline" />
           services, assisting businesses in creating   <br className="sm:hidden md:inline" />
           training. This platform streamlines the <br className="md:hidden lg:inline" />
           data labeling process, enhancing the <br className="lg:hidden xl:inline" />
           efficiency of machine learning model <br className="lg:hidden xl:inline" />
         
           </p>
         </div>
         </div>
         </div>
         </div>
        );
    };
    
    export default Tools ;