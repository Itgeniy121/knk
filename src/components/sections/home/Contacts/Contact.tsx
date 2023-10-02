import cl from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className='container pt-10 flex flex-col justify-center items-center mt-[100px] mb-[50px]'>
      <h2 className={cl.title}>
        <span className={cl.main}>contact with us</span>
        <span className='absolute top-[-50px] left-[140px] max-l:text-[80px] max-l:left-[100px] max-ipad:text-[65px] max-ipad:top-[-35px] max-ipad:left-[100px] max-mm:text-[40px] max-mm:top-[-15px] max-sml:left-[60px] max-xsml:text-[27px] max-ssml:left-[30px]'>связь с нами</span>
      </h2>
      <div className='flex flex-row justify-between items-center w-[80%] h-[200px] max-xsml:flex-col max-xsml:h-[140px] max-xsml:w-full'>
        <button className='border-[2px] rounded-[70px] bg-none w-[450px] h-[100px] max-l:w-[320px] max-s:w-[270px] max-med:w-[180px] max-med:h-[50px] max-xsml:w-[280px] hover:shadow-md hover:shadow-white'>
          <span className={cl.buttons}>Написать нам</span>
        </button>
        <button className='border-[2px] rounded-[70px] bg-none w-[450px] h-[100px] max-l:w-[320px] max-s:w-[270px] max-med:w-[180px] max-med:h-[50px] max-xsml:w-[280px] hover:shadow-md hover:shadow-white'>
          <span className={cl.buttons}>Обсудить проект</span>
        </button>
      </div>
      <div className='flex flex-row justify-between items-center w-[80%] h-[200px] max-xsml:w-[95%]'>
        <a href="https://t.me/knkweb" className='flex flex-col w-[20%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px] hover:underline'>
          <span className={cl.socials}>Telegram</span>
          <span className={cl.link}>@idntnow</span>
        </a>
        <a href="https://www.youtube.com/@knkwebstudio" className='flex flex-col w-[15%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px] hover:underline'>
          <span className={cl.socials}>YouTube</span>
          <span className={cl.link}>knkweb.</span>
        </a>
        <a href="mailto:kantorin.ilya@yandex.ru" className='flex flex-col w-[25%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px] hover:underline'>
          <span className={cl.socials}>Gmail</span>
          <span className={cl.link}>kantorin.ilya@yandex.ru</span>
        </a>
        <a href="tel:+79144054140" className='flex flex-col w-[20%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px] hover:underline'>
          <span className={cl.socials}>Phone</span>
          <span className={cl.link}>+79144054140</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
