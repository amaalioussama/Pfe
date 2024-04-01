"use client";
import Image from "next/image";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import pic from "../../../public/handgetstarted.png";
import pic2 from "../../../public/stars.png";
import { useRouter } from 'next/navigation'
const Slide = () => {
    useEffect(() =>{
      Aos.init({ duration: "1000" });
    }, []);
    const router = useRouter()
    return (
    
        <div className="flex flex-col items-center justify-center  bg-gradient-to-b  from-red-950 to-black ">
          <div className="mt-80" >
        <div className=" flex" data-aos="fade-up ">
        <div  className="relative top-80" >
            <Image src={pic} alt="elemnt" className="h-auto w-auto ml-60 mr-60 mt-80" />
            
            <h1 className="mt-0 text-3xl text-white font-bold font-serif uppercase bg-clip-text text-center " data-aos="fade-up">
        <span className='text-3xl font-normal font-advent-pro uppercase bg-gradient-to-t from-gray-200 to-transparent bg-clip-text text-transparent'>GET  &nbsp;ALL</span>
        <span className='text-3xl font-normal font-advent-pro uppercase bg-gradient-to-t from-gray-200 to-transparent bg-clip-text text-transparent'>&nbsp;resources</span>
        <span className='text-3xl font-normal font-advent-pro uppercase bg-gradient-to-t from-gray-200 to-transparent bg-clip-text text-transparent'> &nbsp;now</span>
      </h1>
      <p className="text-white text-center mt-4 font-mono " data-aos="fade-up">
              Embark on a journey of knowledge and discovery with UniCat <br />
              your ultimate compact chatbot companion. Let's make learning <br />
              endlessly exciting and enjoyable together!
            </p>
            <Image src={pic2} alt="elemnt" className="h-28 w-auto ml-60 mr-60 "/>
            <div className="flex justify-between mt-5">
                            <button className="bg-black inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-base font-medium text-white ml-3" onClick={() => router.push('/sign-up')}>
                                <span className="px-10 py-2.5 bg-gradient-to-br from-red-950 to-red-800 rounded-2xl group-hover:to-red-700 transition-colors duration-150 ease-in-out ml-40">
                                    SIGN UP
                                </span>
                            </button>
                            <button className="bg-black inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-base font-medium text-white ml-3">
                                <span className="px-12 py-2.5 bg-gradient-to-br from-red-950 to-red-800 rounded-2xl group-hover:to-red-700 transition-colors duration-150 ease-in-out mr-48"onClick={() => router.push('/login')}>
                                    LOGIN
                                </span>
                            </button>
                        </div>

            </div>
            </div>
        </div>
        </div>
      
    ) };
    export default  Slide;