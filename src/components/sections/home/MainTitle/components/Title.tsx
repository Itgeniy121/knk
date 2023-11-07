import { motion } from "framer-motion";
import "../MainTitle.scss";
import arrow from "../../../../../../assets/imgs/downArrow.png";
import Image from "next/image";
const Tittle = () => {
  const textAnimation = {
    hidden: {
      x: -140,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.25, duration: 0.8 },
    }),
  };
  const textAnimation2 = {
    hidden: {
      x: 140,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.5, duration: 0.8 },
    }),
  };
  return (
    <motion.div
      id='needHide'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      className='hide flex-col w-full mt-[160px] px-[100px] max-l:mt-[0px] max-l:px-[40px] max-xsml:px-[20px]'
    >
      <motion.h1
        custom={1}
        variants={textAnimation}
        className='text-[120px] text-white font-[800] max-l:text-[80px] max-s:text-[50px] max-xsml:text-[35px] max-xsml:font-[700]'
      >
        Делаем сайты
      </motion.h1>
      <motion.h1
        custom={1}
        variants={textAnimation2}
        className='text-[120px] text-white font-[800] flex items-center justify-between '
      >
        <Image
          src={arrow}
          className='downArrow w-[100px] h-[100px] mt-[30px] max-s:w-[70px] max-s:h-[70px] max-xsml:w-[40px] max-xsml:h-[40px]'
          alt='arrow'
        ></Image>
        <h1 className='max-l:text-[80px] max-s:text-[50px] max-xsml:text-[35px] max-xsml:font-[700]'>
          Для вас
        </h1>
      </motion.h1>
    </motion.div>
  );
};

export default Tittle;
