import React from "react";
import Image from "next/image";
import figma from "../../../../../../assets/imgs/figma.png"
import bootstrap from "../../../../../../assets/imgs/bs.png"
import ps from "../../../../../../assets/imgs/ps.png"
import xd from "../../../../../../assets/imgs/xd.png"
const DesignStack = () => {
  return(
    <div className="flex flex-row items-center justify-between w-[750px] h-[100px] rounded-[7px] px-[7px] mt-[50px]">
        <div className="flex flex-col items-center justify-center">
            <Image src={figma} alt="react" className="w-[60px] h-[60px]"/>
            <span>Figma</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={bootstrap} alt="react" className="w-[60px] h-[60px]"/>
            <span className="">bootstrap</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={ps} alt="react" className="w-[60px] h-[60px]"/>
            <span>Photoshop</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={xd} alt="react" className="w-[60px] h-[60px]"/>
            <span>Adobe XD</span>
        </div>
    </div>
  )
};

export default DesignStack;
