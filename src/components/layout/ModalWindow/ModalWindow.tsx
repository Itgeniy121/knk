import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../ModalWindow/ModalWindow.scss";
interface formTypes {
  name: string;
  phone: string;
  description: string;
}
const ModalWindow = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formTypes>();
  const handler = () => {
    let modal = document.getElementById("modal");
    modal?.classList.remove("active");
  };
  const onSubmit: SubmitHandler<formTypes> = () => {
    let modal = document.getElementById("modal");
    modal?.classList.remove("active");
    reset({
      phone: "",
      name: "",
      description: "",
    });
  };
  return (
    <div
      id='modal'
      className='top-0 bottom-0 right-0 left-0 fixed hidden authModal justify-center items-center z-[900]'
      onClick={handler}
    >
      <div
        onClick={e => e.stopPropagation()}
        className='imgBg w-[550px] h-[630px] rounded-[10px] z-[99999999] max-mm:w-[400px] max-xsml:w-[280px] max-xsml:h-[550px]'
      >
        <div className='flex flex-col justify-start items-start w-full h-full pl-[30px] pt-[20px]'>
          <span className='modalTitle'>Обратная форма</span>
          <div className='w-full'>
            <p className='desc'>Имя</p>
            <input
              type='name'
              className='base-input'
              {...register("name", {
                required: "Введите ваше имя",
              })}
              onChange={e => setName(e.target.value)}
            />
            {errors?.name && <div className='error'>{errors.name.message}</div>}
          </div>
          <div className='mt-[20px] w-full'>
            <p className='desc'>Номер телефона</p>
            <input
              type='phoneNumber'
              className='base-input'
              {...register("phone", {
                required: "Введите номер телефона",
                pattern: {
                  value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                  message: "Введите корректный номер",
                },
              })}
              onChange={e => setPhoneNumber(e.target.value)}
            />
            {errors?.phone && (
              <div className='error'>{errors.phone.message}</div>
            )}
          </div>
          <div className='mt-[20px] w-full'>
            <p className='desc'>Опишите ваш проект</p>
            <textarea
              className='base-area'
              {...register("description", {
                required:
                  "Опишите, как должен выглядить проект, это важно для нас",
              })}
              onChange={e => setDescription(e.target.value)}
            />
            {errors?.description && (
              <div className='error'>{errors.description.message}</div>
            )}
          </div>
          <button
            className='mt-[20px] border px-[40px] py-[15px] rounded-[4px] hover:bg-white hover:text-[#1b1b1b] max-xsml:text-[12px] w-[93%] duration-300'
            onClick={handleSubmit(onSubmit)}
          >
            <p>Отправить форму</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
