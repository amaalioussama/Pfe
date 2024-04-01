'use client'

import React, { useState, useEffect } from "react";
import OpenAI from "openai";
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Logochat from '../../../public/chat.png';
import axios from "axios";
import { useRouter } from "next/navigation";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'; 
import IosShareTwoToneIcon from '@mui/icons-material/IosShareTwoTone';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';
import Addbtn from '../../../public/add-30.png'
import User from '../../../public/user.png'
import Logout from '../../../public/logout.png'
import Home from '../../../public/home.png'
import './style.css';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Page = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3001/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Corrected
          },
        });
        setUserId(result.data.userId);
        setUsername(result.data.username);
      } catch (error) {
        router.push('/login');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isListening) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    }
  }, [isListening]);

  const handleUserInput = async () => {
    setIsLoading(true);
    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'user', content: userInput },
    ]);
    const timeNow = new Date().toISOString();
    try {
      await axios.post(
        'http://localhost:3001/savechat',
        {
          userInput,
          assistantResponse: chatHistory.map((message) => message.content),
          time: timeNow,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Corrected
          },
        }
      );
      console.log('Chat data sent to backend successfully');
    } catch (error) {
      console.error('Error sending chat data to backend:', error);
    }

    const chatCompletion = await openai.chat.completions.create({
      messages: [
        ...chatHistory,
        { role: 'assistant', content: userInput },
      ],
      model: 'gpt-3.5-turbo',
    });

    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'assistant', content: chatCompletion.choices[0].message.content },
    ]);

    setUserInput('');
    setIsLoading(false);
  };

  const handleVoiceInput = () => {
    setIsListening(true);
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:3001/logout');
      localStorage.clear();
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const home = () => {
    router.push('/');
  };
  // Function to detect code blocks
  const isCodeBlock = (content) => {
    return content.trim().startsWith('');
  };

  const renderMessage = (message, index) => {
    // Extract code blocks if they exist
    const extractCodeBlock = (content) => {
      const codeRegex = /```([\s\S]*?)```/;
      const match = content.match(codeRegex);
      return match ? match[1].trim() : null;
    };
  
    // Format non-code content
    const formatTextContent = (content) => {
      const prefix = message.role === 'user' ? `${username}: ` : 'UNICAT: ';
      return content.split('\n').map((line, lineIndex) => {
        if (line.startsWith('##')) {
          return <div key={lineIndex} className="font-bold text-lg">{`${prefix}${line.substring(2).trim()}`}</div>;
        } else {
          return <div key={lineIndex}>{`${prefix}${line}`}</div>;
        }
      });
    };
  
    const codeContent = extractCodeBlock(message.content);
  
    if (codeContent) {
      const prefix = message.role === 'user' ? `${username}: ` : 'UNICAT: ';
      return (
        <div key={index} className={`${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-2 flex max-w-full mx-auto`}>
          <pre className="bg-black p-3 rounded-lg text-white font-mono text-sm border border-black overflow-x-auto">
            {`${prefix}\n${codeContent}`}
          </pre>
        </div>
      );
    } else {
      return (
        <div key={index} className={`${message.role === 'user' ? 'text-right' : 'text-left'} mb-2 max-w-full mx-auto`}>
          {formatTextContent(message.content)}
        </div>
      );
    }
  };
  
  
  
  

  const reloadPage = () => {
    window.location.reload();
  };
  // Return the JSX content
  return (
    <div className="flex justify-between min-h-screen bg-gradient-to-b from-black to-red-950 relative">
     <div className="bg-black p-10 h-screen top-0 bottom-0 left-0 w-60 ">
  <div className="flex items-center">
    <div className="text-2xl flex items-center">
      <Image src={Logo} alt="Logo" className="w-28 h-35 -ml-8 -mt-7" />
      <div className="mb-20">
      <span className='text-red-700'>un</span>
      <span className='text-red-800'>ic</span>
      <span className='text-red-900'>at</span>
      </div>
    </div>
    
    <button onClick={reloadPage} className="bg-red-700 border border-red-700 rounded-full flex items-center px-8 py-2 text-white font-sans text-sm -ml-40 -mb-32 mr-4">
      <Image src={Addbtn} alt="plus_icon" className="mr-2 w-4 h-4" />
      <span>New Chat</span>
    </button>
   
  </div>

          
         
  <div className="border-b border-gray-500 fixed bottom-52 left-0 w-60 flex">
        <div className="ml-4 fixed bottom-0 flex-row text-white font-serif text-sm font-semibold flex items-center">
        <Image src={User} alt="User Icon" className="mr-2 w-10 h-10" />
           {username}
          &nbsp; &nbsp; &nbsp;
          <button onClick={logout} className="ml-0 fixed bottom-28 text-white  font-serif text-sm font-semibold flex items-center "> 
          <Image src={Logout} alt="Logout Icon" className="mr-2 w-9 h-9" />
         Logout
          </button>
          <button onClick={home} className="ml-0 fixed bottom-40 text-white  font-serif text-sm font-semibold flex items-center "> 
          <Image src={Home} alt="home Icon" className="mr-2 w-9 h-9" />
         Home
          </button>
        </div>
      </div>
      </div>
      <div className="bg-gradient-to-b from-red-950 to-black h-full relative flex-1">
     
      <div id="chat-container" className="w-4/5 fixed bottom-16 overflow-y-auto h-5/6">  

          <div className="">
    
            <div className="mb-4">
              {chatHistory.map((message, index) => renderMessage(message, index))}
            </div>
          </div>
        </div>
        <div className="p-4 bg-black">
          <div className="  fixed w-4/5 bottom-5 flex items-center justify-center border-2 border-gray-500 rounded-xl">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className=" p-2 focus:outline-none bg-transparent text-white font-poppins text-base flex-1 mr-4"
            />
            <button
              onClick={handleVoiceInput}
              className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-gradient-to-br group-hover:from-red-950 group-hover:via-black"
            >
              <KeyboardVoiceIcon /> 
            </button>
            <button
              onClick={handleUserInput}
              disabled={isLoading}
              className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-gradient-to-br group-hover:from-red-950 group-hover:via-black"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-gradient-to-br group-hover:from-red-950 group-hover:via-black">
                {isLoading ? <><HourglassBottomTwoToneIcon /> Loading...</> : <IosShareTwoToneIcon />}
              </span>
            </button> 
            &nbsp; &nbsp; &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;