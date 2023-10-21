import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import arrow from "../../../../../../assets/imgs/arrow.png";
const Case5 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    const arrow = document.getElementById("arr5")
    arrow?.classList.toggle("rotate")
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className='w-full h-[120px] border-b-[3px] flex items-center justify-between px-[10px] max-med:h-[90px] max-xsml:border-b-[1.5px] max-xsml:h-[70px]'>
        <span className='text-[50px] pt-[30px] max-s:text-[40px] max-med:text-[27px] max-xsml:text-[19px] max-ssml:text-[15px]'>Техническая поддержка сайта</span>{" "}
        <Image
        id="arr5"
          onClick={handleVisible}
          className='w-[35px] h-[35px] cursor-pointer max-sm:w-[25px] max-sm:h-[25px] mt-[30px] duration-500'
          src={arrow}
          alt='aaa'
        ></Image>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100px", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{duration: 0.8}}
            className='w-full flex flex-col justify-between items-start'
          >
            <div className='flex flex-row justify-between items-center w-full mt-[25px]'>
              <span className='mt-[10px] ml-[20px] text-[20px] max-sml:text-[15px]'>
                Тут дескрипш дать че за услуа че входит сюда
                </span>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Case5;