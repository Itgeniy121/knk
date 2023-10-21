"use client"
import React from "react";
import { motion } from "framer-motion";
import cl from "./Portfolio.module.scss";
import Case2 from "./components/Case2";
import Case1 from "./components/Case1";
import Case3 from "./components/Case3";
const Portfolio = () => {
  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.1, duration: 0.5}
    })
  }
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.1}} className='container flex flex-col mb-[100px]'>
      <h2 className={cl.title}>
        <motion.span custom={1} variants={textAnimation} className={cl.raboti}>Наши работы</motion.span>
      </h2>
      <Case1 />
      <Case2 />
      <Case3 />
    </motion.div>
  );
};

export default Portfolio;
