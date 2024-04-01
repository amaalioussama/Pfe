"use client";
import Image from "next/image";
import lwl from "../../../public/lwl.png";
import tani from "../../../public/tani.png";
import talt from "../../../public/talt.png";
import rab3 from "../../../public/rab3.png";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Partners = () => {
  useEffect(() =>{
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-red-950 to-black">
      <h1 className="mt-0 text-3xl text-white font-bold font-serif uppercase bg-clip-text" data-aos="fade-up">
        <span className='text-slate-300'>DA</span>
        <span className='text-slate-400'>TA &nbsp;LIFE </span>
        <span className='text-red-800'> &nbsp;CERCEL</span>
      </h1>

      <div className="ml-28" data-aos="fade-up">
        <svg className="mt-12" xmlns="http://www.w3.org/2000/svg" width="808" height="4" viewBox="0 0 808 4" fill="none">
          <linearGradient id="lifelineTopGradient" x1="0" y1="0" x2="808" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <path d="M0 2H808.001" stroke="url(#lifelineTopGradient)" strokeWidth="3" />
        </svg>
      </div>

      <div className="flex items-center justify-center mt-6" data-aos="fade-up">
        <div className="ml-12">
          <h1 className="text-3xl font-normal font-advent-pro uppercase bg-gradient-to-t from-gray-300 to-transparent bg-clip-text text-transparent">
            INGEST
          </h1>
          <Image src={lwl} alt="Life without limits" className="h-20 w-20 ml-4 mt-5" />
        </div>
        <div className="ml-16">
          <h1 className="text-3xl font-normal font-advent-pro uppercase bg-gradient-to-t from-gray-300 to-transparent bg-clip-text text-transparent">
            understand
          </h1>
          <Image src={tani} alt="Understanding" className="h-20 w-20 ml-16 mt-5" />
        </div>
        <div className="ml-16">
          <h1 className="text-3xl font-normal font-advent-pro uppercase bg-gradient-to-t from-gray-300 to-transparent bg-clip-text text-transparent">
            respond
          </h1>
          <Image src={talt} alt="Responding" className="h-20 w-20 ml-8 mt-5" />
        </div>
        <div className="ml-16">
          <h1 className="text-3xl font-normal font-advent-pro uppercase bg-gradient-to-t from-gray-300 to-transparent bg-clip-text text-transparent">
            learn
          </h1>
          <Image src={rab3} alt="Learning" className="h-20 w-20 mt-5" />
        </div>
      </div>

      <div className="mt-8 ml-28" data-aos="fade-up">
        <svg xmlns="http://www.w3.org/2000/svg" width="808" height="4" viewBox="0 0 808 4" fill="none">
          <linearGradient id="lifelineGradient" x1="0" y1="0" x2="808" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <path d="M0 2H808.001" stroke="url(#lifelineGradient)" strokeWidth="3" />
        </svg>
      </div>
      
     
    </div>
  );
};

export default Partners;
