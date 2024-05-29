import React from "react";
import LayoutComponents from "../components/LayoutComponents";
import ModalComponents from "../components/elemen/ModalComponents";
import HeroBgSection from "../components/section/HeroBgSection";
import NavbarComponents from "../components/elemen/NavbarComponents";

function Home() {
 const [isOpen,setIsOpen] = React.useState<boolean>(true)
  return (
    <LayoutComponents>
      <ModalComponents isOpen={isOpen} setIsOpen={setIsOpen}/>
     
      <NavbarComponents/>

      <div>
        <HeroBgSection/>
      </div>
    </LayoutComponents>
  );
}

export default Home;
