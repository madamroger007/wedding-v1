import React from "react";
import { ModalW, GarisLengkung2 } from "../data.d";
import { FaEnvelope } from "react-icons/fa";
import { useParams } from "react-router-dom";

interface Props{

  isOpen:boolean
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}
function ModalComponents(props:Props) {
  
  const { id } = useParams<"id">();
  return (
    <section 
    className={
      "fixed h-screen w-screen left-0 top-0 z-20 transition-all duration-1000" +
      (!props.isOpen ? " -translate-y-full" : "")}
    >
      <div
        className={`w-screen h-screen  bg-no-repeat bg-cover bg-center`}
        style={{ backgroundImage: `url('${ModalW}')` }}
      >
        <div className="bg-[rgba(0,0,0,.6)] w-full h-full">
          <div className="flex items-center justify-center w-full h-full flex-col">
            <h1 className="font-great-vibes text-[40px] font-bold text-white">
              Undangan Digital
            </h1>
            <h1 className=" font-dancing-script font-bold text-[33px] text-white">
              Adam & Hawa
            </h1>
            <img src={GarisLengkung2} alt="" className="w-56" />
            <h3 className="mt-5  font-merriweather text-white">Tamu Undangan</h3>
            <p className="font-sans ">{id}</p>

            <div
              className="btn btn-primary flex justify-center items-center gap-5 mt-5"
              onClick={() => props.setIsOpen(false)}
            >
              Buka Undangan <FaEnvelope />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModalComponents;
