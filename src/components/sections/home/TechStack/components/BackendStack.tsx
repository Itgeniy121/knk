import React from "react";
import Image from "next/image";
import node from "../imgs/node.svg";
import express from "../imgs/express.svg";
import nest from "../imgs/nest.svg";
import docker from "../imgs/docker.svg";
import firebase from "../imgs/fire.svg";
import graph from "../imgs/graph.svg";
import nginx from "../imgs/nginx.svg";
import jwt from "../imgs/jwt.svg";
const BackendStack = () => {
  return (
    <div className='flex flex-col items-center justify-between w-full h-[630px] max-s:flex-row max-s:justify-start overflow-x-auto max-s:h-[400px] max-s:w-[100%] max-sml:h-[300px]'>
      <div className='flex flex-row justify-between items-center w-full h-1/2 max-s:w-[1400px]'>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='ts' src={node} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>Node.js</span>
          <span className='techDescription w-full mt-[20px]'>
            Node или Node.js — программная платформа, основанная на движке V8,
            превращающая JavaScript из узкоспециализированного языка в язык
            общего назначения.
          </span>
        </div>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='ts' src={jwt} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>JWT</span>
          <span className='techDescription w-full mt-[20px]'>
          JWT — это JSON Web Tokens, простой и безопасный способ передачи информации между клиентом и сервером с помощью шифрования.
          </span>
        </div>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='next' src={express} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>Expresx.js</span>
          <span className='techDescription w-full mt-[20px]'>
            Express — фреймворк web-приложений для Node.js, реализованный как
            свободное и открытое программное обеспечение.
          </span>
        </div>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='next' src={nest} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>Nest.js</span>
          <span className='techDescription w-full mt-[20px]'>
            Nest — это платформа для создания эффективных масштабируемых
            программ Node.js на стороне сервера.
          </span>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center w-full h-1/2 max-s:w-[1400px]'>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='next' src={docker} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>Docker</span>
          <span className='techDescription w-full mt-[20px]'>
            Docker — программное обеспечение для автоматизации развёртывания и
            управления приложениями.
          </span>
        </div>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='next' src={firebase} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>FireBase</span>
          <span className='techDescription w-full mt-[20px]'>
            Firebase - это облачная база данных, которая позволяет пользователям
            хранить и получать сохраненную информацию.
          </span>
        </div>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='next' src={graph} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>GraphQl</span>
          <span className='techDescription w-full mt-[20px]'>
            GraphQL — язык запросов данных и язык манипулирования данными с
            открытым исходным кодом для построения веб ориентированных
            программных интерфейсов.
          </span>
        </div>
        <div className='w-[240px] h-[300px] flex flex-col px-[5px] justify-start items-start max-sml:w-[200px] max-sml:h-[200px]'>
          <Image alt='next' src={nginx} className='w-[40px] h-[40px]' />
          <span className='techName mt-[40px] max-sml:mt-[25px]'>Nginx</span>
          <span className='techDescription w-full mt-[20px]'>
            Nginx — веб-сервер и почтовый прокси-сервер, работающий на
            Unix-подобных операционных системах.
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackendStack;
