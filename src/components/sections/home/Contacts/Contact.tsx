import cl from "./Contact.module.scss";
const Contact = () => {
  return (
    <div className='container pt-10 flex flex-col justify-center items-center mt-[100px]'>
      <h2 className={cl.title}>
        <span className={cl.main}>contact with us</span>
        <span className='absolute top-[-50px] left-[140px]'>связь с нами</span>
      </h2>
      <div className='flex flex-row justify-between items-center w-[80%] h-[200px]'>
        <button className='border-[2px] rounded-[70px] bg-none w-[450px] h-[100px]'>
          <span className={cl.buttons}>Написать нам</span>
        </button>
        <button className='border-[2px] rounded-[70px] bg-none w-[450px] h-[100px]'>
          <span className={cl.buttons}>Обсудить проект</span>
        </button>
      </div>
      <div className='flex flex-row justify-between items-center w-[80%] h-[200px]'>
        <div className='flex flex-col w-[200px] justify-center items-start border-t-[2px] pt-[40px]'>
          <span className={cl.socials}>Telegram</span>
          <span className={cl.link}>@idntnow</span>
        </div>
        <div className='flex flex-col w-[200px] justify-center items-start border-t-[2px] pt-[40px]'>
          <span className={cl.socials}>Vk</span>
          <span className={cl.link}>@idntnow</span>
        </div>
        <div className='flex flex-col w-[200px] justify-center items-start border-t-[2px] pt-[40px]'>
          <span className={cl.socials}>Gmail</span>
          <span className={cl.link}>@idntnow</span>
        </div>
        <div className='flex flex-col w-[200px] justify-center items-start border-t-[2px] pt-[40px]'>
          <span className={cl.socials}>Instagram</span>
          <span className={cl.link}>@idntnow</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
