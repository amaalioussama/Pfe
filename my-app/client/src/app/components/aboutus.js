"use client";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import Image from "next/image";
import { GitHub } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import Aos from 'aos';
import { useEffect } from 'react';

const  Aboutus = () => {
    useEffect(() =>{
      Aos.init({ duration: "1000" });
    }, []);
  return <div className="bg-red-950 flex justify-center items-center snap-x  ">
{/* <Card className="w-96 shadow-lg shadow-white" style={{ background: 'transparent', backdropFilter: 'blur(80px)', opacity: 0.8 }}>
  <CardBody className="text-center bg-transparent">
    <Typography variant="h4" color="blue-gray" className="mb-2 text-black">
      Oussama Amaali
    </Typography>
    <Typography color="blue-gray" className="font-medium text-black" textGradient>
      Full Stack Developer
    </Typography>
    <Typography color="blue-gray" className="font-medium text-black" textGradient>
      CEO / Co-Founder
    </Typography>
  </CardBody>
  <CardFooter className="flex justify-center gap-7 pt-2 h-20 text-black">
    <Tooltip content="GitHub">
      <a href="https://github.com/amaalioussama" target="_blank" rel="noopener noreferrer">
        <GitHub style={{ fontSize: 24 }} />
      </a>
    </Tooltip>
    <Tooltip content="Twitter">
      <a href="https://web.facebook.com/profile.php?id=100043237703826" target="_blank" rel="noopener noreferrer">
        <Facebook style={{ fontSize: 24 }} />
      </a>
    </Tooltip>
    <Tooltip content="Instagram">
      <a href="https://www.instagram.com/usmvveos/" target="_blank" rel="noopener noreferrer">
        <Instagram style={{ fontSize: 24 }} />  
      </a>
    </Tooltip>
  </CardFooter>
</Card>
<Card className="w-96 ml-48" style={{ background: 'transparent', backdropFilter: 'blur(10px)', opacity: 0.8 }}>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2 text-black">
         Fatima Eazzhra Elhadrachi
        </Typography>
        <Typography color="blue-gray" className="font-medium text-black" textGradient>
         Front end Devlopper
        </Typography>
        <Typography color="blue-gray" className="font-medium text-black" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2 h-20 text-black">
  <Tooltip content="Giithbb">
  <a href="https://github.com/fatimazahraelhadrachi" target="_blank" rel="noopener noreferrer">
  <GitHub style={{ fontSize: 24 }} />
</a>

  </Tooltip>
  <Tooltip content="Twiter">
  <a href="" target="_blank" rel="noopener noreferrer">
    <Facebook style={{ fontSize: 24 }} />
    </a>
  </Tooltip>
  <Tooltip content="insta">
  <a href="https://www.instagram.com/el_f_z/" target="_blank" rel="noopener noreferrer">
    <Instagram style={{ fontSize: 24 }} />  
    </a>
  </Tooltip>
</CardFooter>

    </Card> */}
  
<div className="mt-28 flex">
<div className="max-w-sm mx-auto mt-11 overflow-hidden bg-red-950 rounded-lg shadow-lg hover:shadow-white "  data-aos="fade-right">
  <div className="relative">
    <Image
      src="https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
      alt="Profile Image"
      layout="responsive"
      width={1080}
      height={600} 
    />
  </div>
  <div className="px-6 py-4">
    <div className="text-xl font-semibold text-white">Oussama Amaali</div>
    <p className="text-gray-600">Full Stack Developer</p>
  </div>
  <div className="px-6 py-4  ">
  <GitHub style={{ fontSize: 24 }}  />
  <Instagram style={{ fontSize: 24 }} className="ml-10" />  
  <Facebook style={{ fontSize: 24 }}className="ml-10"  />
  </div>
  <div className="px-6 py-4">
    <a href="#" className="text-gray-300 hover:underline">View Profile</a>
  </div>
</div>
<div className="max-w-sm mx-auto mt-11 overflow-hidden bg-red-950 rounded-lg shadow-lg hover:shadow-white ml-28 " data-aos="fade-left">
  <div className="relative">
    <Image
      src="https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
      alt="Profile Image"
      layout="responsive"
      width={1080}
      height={600} 
    />
  </div>
  <div className="px-6 py-4">
    <div className="text-xl font-semibold text-white">Elhadrachi Fatima Eazzhra</div>
    <p className="text-gray-600">Front-end  Developer</p>
  </div>
  <div className="px-6 py-4  ">
  <GitHub style={{ fontSize: 24 }}  />
  <Instagram style={{ fontSize: 24 }} className="ml-10" />  
  <Facebook style={{ fontSize: 24 }}className="ml-10"  />
  </div>
  <div className="px-6 py-4">
    <a href="#" className="text-gray-300 hover:underline">View Profile</a>
  </div>
</div>
</div>
  </div>;
};
export default Aboutus;