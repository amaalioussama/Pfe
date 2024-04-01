"use client"
import Image from 'next/image';
import Logo from '../../../public/logo2.png';
import princip from '../../../public/princip.png';
import Aos from 'aos';
import "aos/dist/aos.css"
import {TypeAnimation} from 'react-type-animation'
import { useEffect } from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'
import React, { useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';


const First = () => {
  const resources = useRef(null);

  const scrollToResources = () => {
    resources.current.scrollIntoView({ behavior: 'smooth' });
    
  };
  return (
  <>
   <div className="absolute top-8 left-8 z-10">
    <Image src={Logo} width={120} height={120} alt="Logo" />
  </div>
  <div className="bg-gradient-to-t from-black via-black to-black relative flex h-screen">
    <div className="flex items-center ml-8 w-96">
      <div className="ml-40 text-white">
        <div className='mt-4'>
          <div className="flex items-center">
            <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className="text-5xl text-red-600 mt-16 font-bold font-serif uppercase bg-clip-text"  >
              I'm <span className='text-red-700'>un</span><span className='text-red-800'>ic</span><span className='text-red-900'>at</span>
            </motion.h1>
          </div>
          <motion.div variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>
            <h1 className="text-2xl mt-4 font-bold font-serif uppercase bg-gradient-to-r from-white to-transparent bg-clip-text text-white">
              Your Pocket-<span className='text-slate-200'>Sized</span> 
            </h1>
            <TypeAnimation
              sequence={[
                " Learning companion",
                2000, 
                " Learning friend",
                2000, 
                " Learning saver",
                2000, 
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl mt-4 font-bold font-serif uppercase bg-gradient-to-r from-white to-transparent bg-clip-text text-white"
              style={{ fontSize: '1.5em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </motion.div>
          <motion.p variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className=' text-wrap text-base text-sm  mt-4 leading-normal font-light uppercase  text-slate-300 whitespace-pre-line'  >
            Introducing UniCat, your learning ally! From homework to study sessions and friendly chats, UniCat makes learning delightful. Your go-to for knowledge in a nutshell!
          </motion.p>
          <motion.div variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>
            <br/>
            <br/>
            <button onClick={scrollToResources}  className="bg-black relative inline-flex w-80 items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-base font-medium text-white">
  <span className="relative px-5 py-2.5 w-48 bg-gradient-to-br from-red-950 to-red-800 rounded-2xl group-hover:to-red-700 transition-colors duration-150 ease-in-out">
    Get started 
  </span>
</button>

          </motion.div>
        </div>
      </div>
    </div>
    <motion.div variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}  className="mt-24 h-700 w-1/3 absolute right-4 mr-40 top-5  z-10 transform translate-x-0 scale-125" >
      <Image
        src={princip}
       
        alt=''
      />
    </motion.div>
  </div>
  <div ref={resources} />
  </>
 

  );

};

export default First;