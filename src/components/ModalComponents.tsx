import React from "react";
import { clsx } from 'clsx';
import { ModalW, GarisLengkung2 } from "./data.d";
import { FaEnvelope } from "react-icons/fa";
function ModalComponents() {
  const [open, setOpen] = React.useState(false);
  return (
    <section className={clsx("fixed", open && "hidden")}>
      <div
        className={`w-screen h-screen  bg-no-repeat bg-cover bg-center`}
        style={{ backgroundImage: `url('${ModalW}')` }}
      >
        <div className="bg-[rgba(0,0,0,.6)] w-full h-full">
          <div className="flex items-center justify-center w-full h-full flex-col">
            <h1 className="font-great-vibes text-[40px] font-bold">
              Undangan Digital
            </h1>
            <h1 className=" font-dancing-script font-bold text-[33px]">
              Adam & Hawa
            </h1>
            <img src={GarisLengkung2} alt="" className="w-56" />
            <h3 className="mt-5  font-merriweather">Tamu Undangan</h3>
            <p className="font-sans ">Anwar</p>

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
