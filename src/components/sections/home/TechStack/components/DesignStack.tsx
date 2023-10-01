import React from "react";
import Image from "next/image";
import figma from "../../../../../../assets/imgs/figma.png"
import bootstrap from "../../../../../../assets/imgs/bs.png"
import ps from "../../../../../../assets/imgs/ps.png"
import xd from "../../../../../../assets/imgs/xd.png"
const DesignStack = () => {
  return(
    <div className="flex flex-row items-center justify-between w-[750px] h-[100px] rounded-[7px] px-[7px] mt-[50px] max-s:w-[550px] max-med:w-[400px] max-xsml:w-[300px]">
        <div className="flex flex-col items-center justify-center">
            <Image src={figma} alt="react" className="w-[60px] h-[60px] max-xsml:w-[35px] max-xsml:h-[35px]"/>
            <span className="max-xsml:text-[12px]">Figma</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={bootstrap} alt="react" className="w-[60px] h-[60px] max-xsml:w-[35px] max-xsml:h-[35px]"/>
            <span className="max-xsml:text-[12px]">bootstrap</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={ps} alt="react" className="w-[60px] h-[60px] max-xsml:w-[35px] max-xsml:h-[35px]"/>
            <span className="max-xsml:text-[12px]">Photoshop</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={xd} alt="react" className="w-[60px] h-[60px] max-xsml:w-[35px] max-xsml:h-[35px]"/>
            <span className="max-xsml:text-[12px]">Adobe XD</span>
        </div>
    </div>
  )
};

export default DesignStack;
