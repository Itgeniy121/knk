import cl from "./Contact.module.scss";
const Contact = () => {
  return (
    <div className='container pt-10 flex flex-col justify-center items-center mt-[100px]'>
      <h2 className={cl.title}>
        <span className={cl.main}>contact with us</span>
        <span className='absolute top-[-50px] left-[140px] max-l:text-[80px] max-l:left-[100px] max-ipad:text-[65px] max-ipad:top-[-35px] max-ipad:left-[100px] max-mm:text-[40px] max-mm:top-[-20px] max-sml:left-[60px] max-xsml:text-[27px] max-ssml:left-[30px]'>связь с нами</span>
      </h2>
      <div className='flex flex-row justify-between items-center w-[80%] h-[200px] max-med:w-full max-med:h-[100px] max-sml:h-[50px]'>
        <button className='border-[2px] rounded-[70px] bg-none w-[450px] h-[100px] max-l:w-[320px] max-s:w-[270px] max-med:w-[180px] max-med:h-[50px] max-ssml:w-[140px] max-ssml:h-[40px]'>
          <span className={cl.buttons}>Написать нам</span>
        </button>
        <button className='border-[2px] rounded-[70px] bg-none w-[450px] h-[100px] max-l:w-[320px] max-s:w-[270px] max-med:w-[180px] max-med:h-[50px] max-ssml:w-[140px] max-ssml:h-[40px]'>
          <span className={cl.buttons}>Обсудить проект</span>
        </button>
      </div>
      <div className='flex flex-row justify-between items-center w-[80%] h-[200px] max-xsml:w-[95%]'>
        <div className='flex flex-col w-[15%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px]'>
          <span className={cl.socials}>Telegram</span>
          <span className={cl.link}>@idntnow</span>
        </div>
        <div className='flex flex-col w-[20%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px]'>
          <span className={cl.socials}>Vk</span>
          <span className={cl.link}>@idntnow</span>
        </div>
        <div className='flex flex-col w-[15%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px]'>
          <span className={cl.socials}>Gmail</span>
          <span className={cl.link}>@idntnow</span>
        </div>
        <div className='flex flex-col w-[15%] justify-center items-start border-t-[2px] pt-[40px] max-xsml:pt-[20px]'>
          <span className={cl.socials}>Instagram</span>
          <span className={cl.link}>@idntnow</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
