"use client"
import Image from 'next/image';
import backraound from '../../../public/backforms.png';
import Logo from '../../../public/logo.png';
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useRouter} from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password
      });

      const { token, username } = response.data;

      // Store token and username in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);

      // Redirect to chat page
      router.push("http://localhost:3000/chat");
    } catch (err) {
      console.error(err);
      setError("verfification please");
    }
  };

  return (
    <div className="bg-gradient-to-b from-red-950 to-transparent h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center z-0">
        <Image src={backraound} className='w-auto h-auto' alt="Background Image" />
      </div>
      <div className="absolute top-8 left-8 z-10">
        <Image src={Logo} width={160} height={160} alt="Logo" />
      </div>
      <main className="absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h1 className="text-4xl mb-4 font-poppins font-semibold">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base"
              />
            </div>
            <br/>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base"
              />
              <p className="mt-2 text-sm text-gray-500">
                Forget password? <a href="#" className="font-medium text-white hover:underline">Click here</a>.
              </p>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button 
              type='submit'
              className="bg-black relative inline-flex w-48 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-white rounded-lg group"
            >
              <span className="relative px-5 py-2.5 w-48 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-gradient-to-br group-hover:from-red-950 group-hover:via-red-800">
                Login
              </span>
            </button>
          </form>
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>
          <button className="px-5 py-2 inline-flex items-center justify-center  border  gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
            <span>Login with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;