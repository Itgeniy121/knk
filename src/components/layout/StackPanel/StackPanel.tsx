import React from "react";
import "./StackPanel.scss";
import Image from "next/image";
import nodeJs from "../../../../assets/imgs/node.png";
import react from "../../../../assets/imgs/react.png";
import nest from "../../../../assets/imgs/nest.png";
import tailwind from "../../../../assets/imgs/tailwind.png";
import sass from "../../../../assets/imgs/sass.png";
import express from "../../../../assets/imgs/express.png";
import nginx from "../../../../assets/imgs/nginx.png";
import next from "../../../../assets/imgs/next.png";

const StackPanel = () => {
  return (
    <div className='panel'>
      <Image src={react} alt='react' className='techLogo' />
      <Image
        src={tailwind}
        alt='tailwind'
        className='techLogo !h-[38px] max-sml:!h-[22px]'
      />
      <Image src={next} alt='next' className='techLogo' />
      <Image src={nodeJs} alt='nodeJs' className='techLogo' />
      <Image src={sass} alt='sass' className='techLogo' />
      <Image src={express} alt='express' className='techLogo' />
      <Image src={nest} alt='nest' className='techLogo' />
      <Image src={nginx} alt='nginx' className='techLogo' />
    </div>
  );
};

export default StackPanel;
