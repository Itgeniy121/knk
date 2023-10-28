'use client'
import React, { useState, useLayoutEffect, useEffect } from 'react';
import './MainTitle.scss'
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'framer-motion';
const Title = () => {
  const[isVisible, setIsVisible] = useState(false)
  const[isVisible2, setIsVisible2] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const animationForPc = (first: number, second: number) =>{
    document.getElementById("main")?.classList.add('noScroll')
      window.addEventListener('wheel', () => {
        setIsVisible(true)
        setTimeout(() => setIsVisible2(true), first)
        setTimeout(() =>{
          document.getElementById('needHide')?.classList.remove('hide')
          document.getElementById("main")?.classList.remove('noScroll')
        }, second)
      })
  }
  const animationForPhone = (first: number, second: number) =>{
    document.getElementById("main")?.classList.add('noScroll')
      window.addEventListener('touchmove', () => {
        setIsVisible(true)
        setTimeout(() => setIsVisible2(true), first)
        setTimeout(() =>{
          document.getElementById('needHide')?.classList.remove('hide')
          document.getElementById("main")?.classList.remove('noScroll')
        }, second)
      })
  }
  useLayoutEffect(() =>{
    if(window.screenY === 0 && typeof window !== undefined && window.pageYOffset == 0 && window.innerWidth >= 1024){
      animationForPc(670, 1250)
    }else if(window.screenY === 0 && typeof window !== undefined && window.pageYOffset == 0 && window.innerWidth <= 1024){
      animationForPhone(670, 1250)
    }
  }, [])
  useEffect(()=>{
    if(inView == true && window.innerWidth >= 1024){
      document.getElementById("main")?.classList.add('noScroll')
      window.addEventListener('wheel', () => {
        setTimeout(() => setIsVisible(true), 1000)
        setTimeout(() => setIsVisible2(true), 1670)
        setTimeout(() =>{
          document.getElementById('needHide')?.classList.remove('hide')
          document.getElementById("main")?.classList.remove('noScroll')
        }, 2250)
      })
    }else if(inView == true && window.innerWidth <= 1024){
      document.getElementById("main")?.classList.add('noScroll')
      window.addEventListener('touchmove', () => {
        setTimeout(() => setIsVisible(true), 1000)
        setTimeout(() => setIsVisible2(true), 1670)
        setTimeout(() =>{
          document.getElementById('needHide')?.classList.remove('hide')
          document.getElementById("main")?.classList.remove('noScroll')
        }, 2250)
      })
    }
  }, [inView])
  return (
    <div
      className='w-screen h-screen flex-center flex-col items-center justify-center flex relative'
    >
      <div className='w-[1px] h-[1px] absolute top-0 bg-black' ref={ref}>
       </div>
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
      <motion.div initial={{height: 0}} animate={{height: '100vh'}} transition={{duration: 0.7}} exit={{y: '-100vh'}} className='flex justify-center items-center absolute w-full h-full bg-[#191919] overflow-hidden bottom-0 z-10 baz'>
        <h1 id='needHide' className='main-logo2 lg:text-[100px] sm:text-[70px] text-[50px] mb-4 font-bold hide'>самолет себе хочу</h1>
      </motion.div>
      )
      }
    </AnimatePresence>
    </div>
  );
};

export default Title;
