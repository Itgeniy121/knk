import Image from "next/image";
import bestOffer from "../../../../../../assets/imgs/bestofferstore.png";
import cl from "../Portfolio.module.scss";
const Case1 = () => {
  return (
    <div className='flex flex-row justify-between items-start mb-[150px] mt-[40px] max-ipad:flex-col max-sml:mb-[50px]'>
      <div className='flex flex-col w-[55%] h-full max-ipad:w-full'>
        <Image src={bestOffer} alt='bestOffer' className='w-full img_animat' />
      </div>
      <div className='flex flex-col items-start w-[45%] h-full justify-start pb-[40px] pl-[50px] max-ipad:w-full max-ipad:pl-[0px] max-ipad:pt-[35px]'>
        <div className='flex flex-col'>
          <span className={cl.projectTitle}>BestOffer Store</span>
          <span className='mt-[20px] max-sml:text-[13px] max-sml:mt-[5px]'>
            E-commerce проект BestOffer Store представляет собой современный
            интернет магазин одежды с возможностью обращения к владельцам для
            выкупа товара, реализации и обмена по системе Trade-IN Сайт заточен
            под визуальную эстетику зарубежных сайтов, с использованием
            минимализма и простоты взаимодействия для пользователя.
          </span>
          <span className='mt-[20px] text-[30px] font-[700] max-sml:text-[23px]'>
            Задача
          </span>
          <span className='mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            Создание концепта и дизайна, создание бота для реализации удобства
            продаж, и добавление CMS для простоты изменения контента на сайте.
          </span>
          <span className='mt-[20px] text-[30px] font-[700] max-sml:text-[23px]'>
            Сроки
          </span>
          <span className='mt-[10px] max-sml:text-[13px] max-sml:mt-[5px]'>
            На запуск продукта потребовалось 28 дней
          </span>
        </div>
      </div>
    </div>
  );
};

export default Case1;
