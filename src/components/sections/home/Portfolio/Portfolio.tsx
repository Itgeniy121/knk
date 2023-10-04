import React from "react";
import cl from "./Portfolio.module.scss";
import Case2 from "./components/Case2";
import Case1 from "./components/Case1";
import Case3 from "./components/Case3";
const Portfolio = () => {
  return (
    <div className='container flex flex-col mb-[100px]'>
      <h2 className={cl.title}>
        <span className={cl.raboti}>Наши работы</span>
      </h2>
      <Case1 />
      <Case2 />
      <Case3 />
    </div>
  );
};

export default Portfolio;
