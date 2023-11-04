"use client";
import MainTitle from "@/components/sections/home/MainTitle/MainTitle";
import AboutUs from "@/components/sections/home/AboutUs/AboutUs";
import OurServices from "@/components/sections/home/OurServices/OurServices";
import Portfolio from "@/components/sections/home/Portfolio/Portfolio";
import TechStack from "@/components/sections/home/TechStack/TechStack";
import Contact from "@/components/sections/home/Contacts/Contact";
import { useEffect, useRef } from "react";
export default function Home() {

  
  
  return (
    <div>
      <MainTitle />
      <AboutUs />
      <OurServices />
      <Portfolio />
      <TechStack />
      <Contact />
    </div>
  );
}
