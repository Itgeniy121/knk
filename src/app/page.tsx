import Image from 'next/image'
import MainTitle from "@/components/sections/home/MainTitle/MainTitle";
import WhyDoU from "@/components/sections/home/WhyDoU/WhyDoU";
import AboutUs from "@/components/sections/home/AboutUs/AboutUs";
import OurServices from "@/components/sections/home/OurServices/OurServices";
import Portfolio from "@/components/sections/home/Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <MainTitle/>
      <AboutUs/>
      <OurServices/>
      <Portfolio/>
    </>
  )
}
