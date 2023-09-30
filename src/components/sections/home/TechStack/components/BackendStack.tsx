import React from "react";
import node from "../../../../../../assets/imgs/node.png"
import express from "../../../../../../assets/imgs/express.png"
import nest from "../../../../../../assets/imgs/nest.png"
import docker from "../../../../../../assets/imgs/doker.png"
import GraphQL from "../../../../../../assets/imgs/graph.png"
import nginx from "../../../../../../assets/imgs/nginx.png"
import firebase from "../../../../../../assets/imgs/firebase.png"
import Image from "next/image";
const BackendStack = () => {
  return (
    <div className="flex flex-row items-center justify-between w-[750px] h-[100px] rounded-[7px] px-[7px] mt-[50px]">
        <div className="flex flex-col items-center justify-center">
            <Image src={node} alt="react" className="w-[60px] h-[60px]"/>
            <span>Node.js</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={express} alt="react" className="w-[60px] h-[60px]"/>
            <span>Expres.js</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={nest} alt="react" className="w-[60px] h-[60px]"/>
            <span>Nest</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={docker} alt="react" className="w-[60px] h-[60px]"/>
            <span>Docker</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={GraphQL} alt="react" className="w-[60px] h-[60px]"/>
            <span>GraphQL</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={nginx} alt="react" className="w-[60px] h-[60px]"/>
            <span>Ngix</span>
        </div>
        <div className="flex flex-col items-center justify-center">
            <Image src={firebase} alt="react" className="w-[60px] h-[60px]"/>
            <span>Firebase</span>
        </div>
    </div>
  )
};

export default BackendStack;
