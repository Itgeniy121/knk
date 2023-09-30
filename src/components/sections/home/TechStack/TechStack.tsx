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
    <div className="container pt-10">
        <h2 className="title">
            <span >Технологии&nbsp;</span>
            <span className="tech">и инструменты</span>
        </h2>
        <Swiper 
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination, A11y]}
        >
            <SwiperSlide className="flex items-center justify-center">
                <div className="w-full h-[370px] flex items-center justify-center">
                    <div className="w-[70%] h-full flex flex-col items-center justify-start rounded-[7px] pt-[40px]">
                        <span className="techName">frontend.</span>
                        <FrontendStack/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
                <div className="w-full h-[370px] flex items-center justify-center">
                    <div className="w-[70%] h-full flex flex-col items-center justify-start rounded-[7px] pt-[40px]">
                        <span className="techName">backend.</span>
                        <BackendStack/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
                <div className="w-full h-[370px] flex items-center justify-center">
                    <div className="w-[70%] h-full flex flex-col items-center justify-start rounded-[7px] pt-[40px]">
                        <span className="techName">design.</span>
                        <DesignStack/>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
};

export default TechStack;
