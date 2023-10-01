import React from "react";
import node from "../../../../../../assets/imgs/node.png";
import express from "../../../../../../assets/imgs/express.png";
import nest from "../../../../../../assets/imgs/nest.png";
import docker from "../../../../../../assets/imgs/doker.png";
import GraphQL from "../../../../../../assets/imgs/graph.png";
import nginx from "../../../../../../assets/imgs/nginx.png";
import firebase from "../../../../../../assets/imgs/firebase.png";
import jwt from "../../../../../../assets/imgs/jwt.svg";
import Image from "next/image";
const BackendStack = () => {
  return (
    <div className='flex flex-row items-center justify-between w-[750px] h-[250px] rounded-[7px] px-[7px] mt-[50px] max-s:w-[500px] max-s:flex-col max-med:w-[400px] max-sml:w-[350px] max-sml:h-[150px] max-ssml:w-[270px]'>
      <div className='flex flex-row w-[50%] justify-between items-center mr-[20px] max-s:w-full'>
        <div className='flex flex-col items-center justify-center'>
          <Image src={node} alt='react' className='w-[60px] h-[60px] max-sml:w-[40px] max-sml:h-[40px]' />
          <span className="max-sml:text-[12px]">Node.js</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image src={jwt} alt='react' className='w-[60px] h-[60px] max-sml:w-[40px] max-sml:h-[40px]' />
          <span className="max-sml:text-[12px]">JWT</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image src={express} alt='react' className='w-[60px] h-[60px] max-sml:w-[40px] max-sml:h-[40px]' />
          <span className="max-sml:text-[12px]">Expres.js</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image src={nest} alt='react' className='w-[60px] h-[60px] max-sml:w-[40px] max-sml:h-[40px]' />
          <span className="max-sml:text-[12px]">Nest</span>
        </div>
      </div>
      <div className='flex flex-row w-[50%] justify-between items-center max-s:w-full'>
        <div className='flex flex-col items-center justify-center'>
          <Image src={docker} alt='react' className='w-[60px] h-[60px] max-sml:w-[40px] max-sml:h-[40px]' />
          <span className="max-sml:text-[12px]">Docker</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image src={GraphQL} alt='react' className='w-[60px] h-[60px] max-sml:w-[40px] max-sml:h-[40px]' />
          <span className="max-sml:text-[12px]">GraphQL</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image src={nginx} alt='react' className='w-[60px] h-[60px] max-sml:w-[40px] max-sml:h-[40px]' />
          <span className="max-sml:text-[12px]">Ngix</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image src={firebase} alt='react' className='w-[60px] h-[60px] max-sml:w-[40px] max-sml:h-[40px]' />
          <span className="max-sml:text-[12px]">Firebase</span>
        </div>
      </div>
    </div>
  );
};

export default BackendStack;
