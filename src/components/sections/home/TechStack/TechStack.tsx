"use client"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import FrontendStack from "./components/FrontendStack";
import BackendStack from "./components/BackendStack";
import DesignStack from "./components/DesignStack";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./TechStack.scss"
const TechStack = () => {
    const swiper = useSwiper();
  return(
    <div className="container pt-10 max-l:pt-[0px]">
        <h2 className="title">
            <span >Технологии&nbsp;</span>
            <span className="tech">и инструменты</span>
        </h2>
        <Swiper 
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination, A11y]}
        className="h-[740px] max-s:h-[570px]"
        >
            <SwiperSlide className="flex flex-col items-center justify-center w-full px-[50px]">
                <h2 className='flex items-center justify-center text-[30px] mb-[40px]'>frontend</h2>
                <FrontendStack/>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center w-full px-[50px]">
                <h2 className='flex items-center justify-center text-[30px] mb-[40px]'>backend</h2>
                <BackendStack/>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center w-full px-[50px]">
                <h2 className='flex items-center justify-center text-[30px] mb-[40px]'>design</h2>
                <DesignStack/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
};

export default TechStack;
