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
    <div className="flex flex-row items-center justify-between w-[850px] h-[100px] rounded-[7px] px-[7px] mt-[50px]">
        <div className="flex flex-col items-center justify-center">
            <Image src={react} alt="react" className="w-[60px] h-[60px]"/>
            <span>React</span>
        </div>
        <div className="flex flex-col items-center justify-center pt-[10px]">
            <Image src={tailwind} alt="react" className="w-[60px] h-[40px]"/>
            <span className="mt-[10px]">Tailwind css</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={typecsript} alt="react" className="w-[60px] h-[60px]"/>
            <span>TypeScript</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={strapi} alt="react" className="w-[60px] h-[60px]"/>
            <span>Strapi</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={redux} alt="react" className="w-[60px] h-[60px]"/>
            <span>Redux</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={next} alt="react" className="w-[60px] h-[60px]"/>
            <span>Next.js</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={sass} alt="react" className="w-[60px] h-[60px]"/>
            <span>Sass</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={jest} alt="react" className="w-[60px] h-[60px]"/>
            <span>Jest</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={storybook} alt="react" className="w-[60px] h-[60px]"/>
            <span>Storybook</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={mobx} alt="react" className="w-[60px] h-[60px]"/>
            <span>MobX</span>
        </div>
    </div>
  )
};  

export default FrontendStack;
