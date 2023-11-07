import { useState } from "react";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import "../ModalWindow/ModalWindow.scss";
interface formTypes {
  name: string;
  phone: string;
  text: string;
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
  const onSubmit: SubmitHandler<formTypes> = async () => {
    const data: formTypes = {
      name: name,
      phone: phoneNumber,
      text: description,
    };
    const response = await fetch("https://knkweb.ru/api", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    if (response.ok) {
      toast("Благодарим за вашу заявку! Свяжемся с вами в ближайшее время.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
      });
    } else {
      toast.error("Что-то пошло не так.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    let modal = document.getElementById("modal");
    modal?.classList.remove("active");
    reset({
      phone: "",
      name: "",
      text: "",
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
        className='imgBg w-[550px] h-[630px] rounded-[10px] z-[99999] max-mm:w-[400px] max-xsml:w-[280px] max-xsml:h-[550px]'
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
              {...register("text", {
                required:
                  "Опишите, как должен выглядить проект, это важно для нас",
              })}
              onChange={e => setDescription(e.target.value)}
            />
            {errors?.text && <div className='error'>{errors.text.message}</div>}
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
