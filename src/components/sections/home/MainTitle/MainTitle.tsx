'use client'
import React, { useEffect, useState, useLayoutEffect } from 'react';
import './MainTitle.scss'
import { AnimatePresence, motion } from 'framer-motion';
const Title = () => {
  const[isVisible, setIsVisible] = useState(false)
  const[isVisible2, setIsVisible2] = useState(false)
  useLayoutEffect(() =>{
    if(screenY == 0){
      document.getElementById("main")?.classList.add('noScroll')
    }
    if(window.screen.width < 1024){
      window.addEventListener('scroll', () => {
        setIsVisible(true)
        setTimeout(() => setIsVisible2(true), 670)
        setTimeout(() =>{
          document.getElementById('needHide')?.classList.remove('hide')
          document.getElementById("main")?.classList.remove('noScroll')
        }, 1250)
      })
    }else{
      window.addEventListener('wheel', () => {
        setIsVisible(true)
        setTimeout(() => setIsVisible2(true), 670)
        setTimeout(() =>{
          document.getElementById('needHide')?.classList.remove('hide')
          document.getElementById("main")?.classList.remove('noScroll')
        }, 1250)
      })
    }
  }, [])
  
  return (
    <div
      className='w-screen h-screen flex-center flex-col items-center justify-center flex relative'
    >
      <h1 className='main-logo lg:text-[100px] sm:text-[70px] text-[50px] mb-4 font-bold'>knk web.</h1>
      <h2 className='lg:text-[50px] sm:text-[40px] text-[25px] sub-logo'>Современная веб студия</h2>
    <AnimatePresence>
      { isVisible && (
      <motion.div initial={{height: 0}} animate={{height: '100vh'}} transition={{duration: 0.6}} exit={{y: '-100vh'}} className='flex justify-center items-center absolute w-full h-full bg-white overflow-hidden bottom-0'>
      </motion.div>
      )
      }
    </AnimatePresence>
    <AnimatePresence>
      { isVisible2 && (
      <motion.div initial={{height: 0}} animate={{height: '100vh'}} transition={{duration: 0.5}} exit={{y: '-100vh'}} className='flex justify-center items-center absolute w-full h-full bg-[#191919] overflow-hidden bottom-0 z-10 baz'>
        <h1 id='needHide' className='main-logo lg:text-[100px] sm:text-[70px] text-[50px] mb-4 font-bold hide'>самолет себе хочу</h1>
      </motion.div>
      )
      }
    </AnimatePresence>
    </div>
  );
};

export default Title;
