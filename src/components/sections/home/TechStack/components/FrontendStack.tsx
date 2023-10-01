import React from "react";
import Image from "next/image";
import react from "../../../../../../assets/imgs/react.png"
import next from "../../../../../../assets/imgs/next.png"
import sass from "../../../../../../assets/imgs/sass.png"
import tailwind from "../../../../../../assets/imgs/tailwind.png"
import jest from "../../../../../../assets/imgs/jest.png"
import storybook from "../../../../../../assets/imgs/storybook.svg"
import redux from "../../../../../../assets/imgs/redux.png"
import mobx from "../../../../../../assets/imgs/mobx.svg"
import strapi from "../../../../../../assets/imgs/strapi.svg"
import typecsript from "../../../../../../assets/imgs/typescript.png"
const FrontendStack = () => {
  return(
    <div className="flex flex-row items-center justify-between w-[850px] h-[250px] rounded-[7px] px-[7px] mt-[50px] max-ipad:flex-col max-ipad:w-[650px] max-mm:w-[500px] max-mm:h-[170px] max-sml:w-[330px] max-sml:h-[180px] max-xsml:h-[150px] max-ssml:w-[280px]">
        <div className="flex flex-row w-[50%] justify-between items-center max-ipad:w-full">
        <div className="flex flex-col items-center justify-center">
            <Image src={react} alt="react" className="w-[60px] h-[60px] max-mm:w-[40px] max-mm:h-[40px] "/>
            <span className="max-mm:text-[13px] max-xsml:text-[10px]">React</span>
        </div>
        <div className="flex flex-col items-center justify-center pt-[10px]">
            <Image src={tailwind} alt="react" className="w-[60px] h-[40px] max-mm:w-[40px] max-mm:h-[28px] "/>
            <span className="mt-[10px] max-mm:text-[13px] max-xsml:mt-[0px] max-xsml:text-[10px]">Tailwind css</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={typecsript} alt="react" className="w-[60px] h-[60px] max-mm:w-[40px] max-mm:h-[40px]"/>
            <span className="max-mm:text-[13px] max-xsml:text-[10px]">TypeScript</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={strapi} alt="react" className="w-[60px] h-[60px] max-mm:w-[40px] max-mm:h-[40px] "/>
            <span className="max-mm:text-[13px] max-xsml:text-[10px]">Strapi</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={redux} alt="react" className="w-[60px] h-[60px] max-mm:w-[40px] max-mm:h-[40px]"/>
            <span className="max-mm:text-[13px] max-xsml:text-[10px]">Redux</span>
        </div>
        </div>
        <div className="flex flex-row w-[50%] justify-between items-center ml-[10px] max-ipad:w-full max-ipad:ml-[0px]">
        <div className="flex flex-col items-center justify-center">
            <Image src={next} alt="react" className="w-[60px] h-[60px] max-mm:w-[40px] max-mm:h-[40px]"/>
            <span className="max-mm:text-[13px] max-xsml:text-[10px]">Next.js</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={sass} alt="react" className="w-[60px] h-[60px] max-mm:w-[40px] max-mm:h-[40px]"/>
            <span className="max-mm:text-[13px] max-xsml:text-[10px]">Sass</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={jest} alt="react" className="w-[60px] h-[60px] max-mm:w-[40px] max-mm:h-[40px] "/>
            <span className="max-mm:text-[13px] max-xsml:text-[10px]">Jest</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={storybook} alt="react" className="w-[60px] h-[60px] max-mm:w-[40px] max-mm:h-[40px] "/>
            <span className="max-mm:text-[13px] max-xsml:text-[10px]">Storybook</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={mobx} alt="react" className="w-[60px] h-[60px] max-mm:w-[40px] max-mm:h-[40px]"/>
            <span className="max-mm:text-[13px] max-xsml:text-[10px]">MobX</span>
        </div>
        </div>
    </div>
  )
};  

export default FrontendStack;
