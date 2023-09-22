import React from 'react';
import cl from './Portfolio.module.scss'

import bestOfferImg from '../../../../../assets/imgs/bestofferstore.png'
import Image from "next/image";
const Portfolio = () => {
  return (
    <div className='container mb-40'>
      <h2 className={cl.title}>
        <span className={cl.raboti}>Наши работы</span>
      </h2>
      <Image src={bestOfferImg} alt='bestOffer' width={bestOfferImg.width} height={bestOfferImg.height}/>
    </div>
  );
};

export default Portfolio;
