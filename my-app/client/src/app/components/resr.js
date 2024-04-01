"use client";
import Image from "next/image";
import elemnt from "../../../public/headbeforecycle.png";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Link } from 'react-scroll';

const Resources = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
     <>
     <div id="resources">
      <div className="flex items-center justify-center h-screen mt-28 bg-gradient-to-b from-black to-red-950 relative"  >
        <div className="ml-9 flex" data-aos="fade-up">
        <Image src={elemnt} alt="element" className="h-auto w-auto" />
          <div className="mt-5">
            <div className="flex items-center ml-40">
              <h1 className="text-4xl text-white mt-16 font-bold font-serif uppercase bg-clip-text" data-aos="fade-up">
                <span className='text-slate-200'>Resou</span>
                <span className='text-slate-300'>rces fi</span>
                <span className='text-slate-400'>rst</span>
              </h1>
            </div>
            <br />
            <div className="ml-36">
              <p className='text-wrap text-base font-bold  mt-4  leading-8 uppercase text-slate-300 whitespace-pre-line' data-aos="fade-up">
                UniCat focuses on delivering a streamlined, <br className="sm:hidden md:inline" />
                high-quality learning experience. Through <br className="sm:hidden md:inline" />
                personalized study sessions, interactive <br className="md:hidden lg:inline" />
                quizzes, and adaptive learning features, <br className="lg:hidden xl:inline" />
                UniCat ensures efficiency and excellence <br className="lg:hidden xl:inline" />
                <span className="tracking-wider"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 in every interaction. </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};

export default Resources;
