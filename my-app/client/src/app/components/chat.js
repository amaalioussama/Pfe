import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Logochat from '../../../public/chat.png'

const Chat = () => {
  return <div>
   <div className="old chat frame bg-[#000000CF]">
    <div className=" flex ">
        <Image src={Logo}  className="h-28 w-28 "  alt="" />
        <a href="#" className=" text-white  text-lg font-semibold mt-5">New chat</a>
        <Image src={Logochat}  className="  ml-3 mt-6 h-5 w-12 "  alt="" />
    </div>

   </div>

  </div>;
};
export default Chat;