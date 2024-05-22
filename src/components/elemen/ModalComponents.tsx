import React from "react";
import { clsx } from "clsx";
import { ModalW, GarisLengkung2 } from "../data.d";
import { FaEnvelope } from "react-icons/fa";
import { useParams } from "react-router-dom";
function ModalComponents() {
  const [open, setOpen] = React.useState(false);
  const { id } = useParams<"id">();
  return (
    <section className={clsx("fixed z-10", open && "hidden")}>
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
              className="btn-primary mt-10 flex justify-center items-center gap-2 cursor-pointer max-w-52"
              onClick={() => setOpen(true)}
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
