import React from 'react';
import './MainTitle.scss'

const Title = () => {
  return (
    <div
      className='w-screen h-screen flex-center flex-col items-center justify-center flex'
    >
      <h1 className='main-logo lg:text-[100px] sm:text-[70px] text-[50px] mb-4 font-bold'>knk web.</h1>
      <h2 className='lg:text-[50px] sm:text-[40px] text-[25px] sub-logo'>Современная веб студия</h2>
    </div>
  );
};

export default Title;
