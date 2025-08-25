"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo_home from '@/src/assets/logo_home.png';
import arrow1 from '@/src/assets/arrow1.png';
import "../../src/style/home.css";
import Background from '../ui/Background';
export default function Home() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 lg:pt-36 overflow-hidden">
       <Background/>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 md:mb-16 lg:mb-20 gap-y-6 lg:gap-x-12">
          <div className="lg:w-1/3 flex justify-center lg:justify-end items-center mb-6 lg:mb-0">
            <div className="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px]">
              <Image 
                src={logo_home} 
                alt="logo" 
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="lg:w-2/3 flex justify-center lg:justify-start items-center">
            <div className="text-center lg:text-left">
              <h1 className="loading-text def:text-5xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-cyan-200 via-purple-400 to-pink-400 bg-clip-text text-transparent  animate-pulse leading-tight">
                Welcome to the Mind of Your AI 🧠
              </h1>
            </div>
          </div>
        </div>
        
            <div className='home_buttons '>
                <div className="animated-border-box-glow"></div>
                
                <div className="animated-border-box">
                    <Link href="/mainpage" className="home_link">
                    <img 
                        src={arrow1.src} 
                        alt="Arrow Logo"  
                        className="arrow_image w-[148px] inline -ml-2 mb-[2px] max-[500px]:w-[100px] max-[500px]:-ml-1 max-[500px]:mb-[1px]"
                    />
                    </Link>
                </div>
            </div>
      </div>
    </div>
  );
}
