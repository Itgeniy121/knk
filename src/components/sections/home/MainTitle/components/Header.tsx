import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Header = () => {
  const [visivle, setVisible] = useState(false);
  const handleVisible = () => setVisible(!visivle)
  return (
    <div className='w-full flex flex-row justify-between items-start px-[40px]'>
      <a href='#portfolio'>
        <span className='text-white text-[17px] font-[300] hover:underline'>
          Портфолио
        </span>
      </a>
      <div className='flex flex-col items-center justify-center w-[300px] relative'>
        <div onClick={handleVisible} className="flex justify-center items-center w-full cursor-pointer">
          <span className='text-white text-[17px] font-[300] hover:text-[19px] duration-300'>Медиа</span>
        </div>
        <AnimatePresence>
          {visivle && (
            <motion.div className="absolute top-[40px] rounded-[4px] !h-[100px] bg-[#363636] flex flex-col items-center justify-between py-[10px] w-[170px]" style={{overflow: "hidden"}} initial={{height: 0, opacity: 0}} animate={{height: 'auto', opacity: 1}} exit={{height: 0, opacity: 0}}>
              <a target="_blank" href="https://t.me/knkweb"><span className='text-white text-[17px] font-[300]'>Telegram</span></a>
              <a target="_blank" href="https://www.youtube.com/@knkwebstudio"><span className='text-white text-[17px] font-[300]'>Youtube</span></a>
              <a target="_blank" href="https://instagram.com/knk_web?igshid=OGQ5ZDc2ODk2ZA=="><span className='text-white text-[17px] font-[300]'>Inst</span></a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <a href='#contacts'>
        <span className='text-white text-[17px] font-[300] hover:underline'>
          Контакты
        </span>
      </a>
    </div>
  );
};

export default Header;
