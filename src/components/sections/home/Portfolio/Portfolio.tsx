"use client";
import "./Portfolio.scss";
import Image from "next/image";
import bf1 from "./imgs/bf1.png";
import bf2 from "./imgs/bf2.png";
import bf3 from "./imgs/bf3.png";
import anes2 from "./imgs/anes2.png";
import anes1 from "./imgs/anes1.png";
import anes3 from "./imgs/anes3.png";
import komp1 from "./imgs/komp1.png";
import komp2 from "./imgs/komp2.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Portfolio = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  let yn;
  if (window.innerWidth >= 700) {
    yn = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  } else {
    yn = useTransform(scrollYProgress, [0, 1], [0, 500]);
  }
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (ScrollTrigger.isTouch !== 1) {
      gsap.fromTo(
        ".title",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".title",
            start: "top",
            end: "bottom",
            scrub: true,
          },
        }
      );
      let itemsL = gsap.utils.toArray(".left .item");
      itemsL.forEach((item: any) => {
        gsap.fromTo(
          item,
          { x: -200, opacity: 0 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: 1000,
              end: 0,
              scrub: true,
            },
          }
        );
      });
      let itemsR = gsap.utils.toArray(".right .item");
      itemsR.forEach((item: any) => {
        gsap.fromTo(
          item,
          { x: 200, opacity: 0 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: 1000,
              end: 0,
              scrub: true,
            },
          }
        );
      });
    }
  }, []);
  return (
    <div className='container'>
      <h2 id='portfolio' className='title'>
        <span className='raboti'>Наши работы</span>
      </h2>
      <motion.div
        ref={container}
        className='flex flex-row justify-start items-start w-full overflow-hidden'
      >
        <motion.div
          className='left flex flex-col w-1/2 items-center'
          style={{ y: yn }}
        >
          <Image
            src={bf1}
            alt='bf'
            className='item max-md:w-[150px] max-md:h-[210px]'
          ></Image>
          <Image
            src={anes1}
            alt='bf'
            className='item max-md:w-[150px] max-md:h-[210px]'
          ></Image>
          <div className='flex flex-col item'>
            <h1 className='text-[40px] font-[700] text-[#E1E1E1] mb-[12px] max-md:text-[20px] max:mdfont-[600]'>
              Anescor
            </h1>
            <p className='text-[15px] !font-[100px] text-[#D3D3D3] max-md:text-[11px]'>
              Сайт представляет собой интернет-магазин по покупке комплектующих
              для производства и установки светопрозрачных конструкций.
            </p>
          </div>
          <Image
            src={anes2}
            alt='bf'
            className='item max-md:w-[150px] max-md:h-[210px]'
          ></Image>
          <Image
            src={komp1}
            alt='bf'
            className=' item max-md:w-[190px] max-md:h-[150px]'
          ></Image>
        </motion.div>
        <div className='right flex flex-col w-1/2 items-center'>
          <div className='flex flex-col item'>
            <h1 className='text-[40px] font-[700] text-[#E1E1E1] mb-[12px] max-md:text-[20px] max:mdfont-[600]'>
              BestOffer Store
            </h1>
            <p className='text-[15px] !font-[100px] text-[#D3D3D3] max-md:text-[11px]'>
              E-commerce проект BestOffer Store представляет собой современный
              интернет магазин одежды с возможностью обращения к владельцам для
              выкупа товара.
            </p>
          </div>
          <Image
            src={bf2}
            alt='bf'
            className=' item max-md:w-[150px] max-md:h-[210px]'
          ></Image>
          <Image
            src={bf3}
            alt='bf'
            className=' item max-md:w-[150px] max-md:h-[210px]'
          ></Image>
          <Image
            src={anes3}
            alt='bf'
            className=' item max-md:w-[150px] max-md:h-[210px]'
          ></Image>
          <div className='flex flex-col item'>
            <h1 className='text-[40px] font-[700] text-[#E1E1E1] mb-[12px] max-md:text-[20px] max:mdfont-[600]'>
              ИТ-КОМПАС
            </h1>
            <p className='text-[15px] !font-[100px] text-[#D3D3D3] max-md:text-[11px]'>
              Функциональный сервис для потенциальных и действующих IT-компаний.
              Сайт позволяет рассказать о своей компании и ее преимущиствах.
            </p>
          </div>
          <Image
            src={komp2}
            alt='bf'
            className=' item max-md:w-[150px] max-md:h-[210px]'
          ></Image>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
