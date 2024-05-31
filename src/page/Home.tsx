import React from "react";
import LayoutComponents from "../components/LayoutComponents";
import ModalComponents from "../components/elemen/ModalComponents";
import HeroBgSection from "../components/section/HeroBgSection";
import NavbarComponents from "../components/elemen/NavbarComponents";
import CoupleSection from "../components/section/CoupleSection";
import SaveDateSection from "../components/section/SaveDateSection";
import GalerySection from "../components/section/GalerySection";
import AyatQuranSection from "../components/section/AyatQuranSection";
import ProtocolSection from "../components/section/ProtocolSection";
import UcapanSection from "../components/section/UcapanSection";
import FooterSection from "../components/section/FooterSection";
import RekeninSection from "../components/section/RekeninSection";

function Home() {
 const [isOpen,setIsOpen] = React.useState<boolean>(true)
  return (
    <LayoutComponents>
      <ModalComponents isOpen={isOpen} setIsOpen={setIsOpen}/>
     
      <NavbarComponents/>

      <div>
        <HeroBgSection/>
        <CoupleSection/>
        <SaveDateSection/>
        <GalerySection/>
        <AyatQuranSection/>
        <ProtocolSection/>
        <UcapanSection/>
        <RekeninSection/>
        <FooterSection/>
      </div>
    </LayoutComponents>
  );
}

export default Home;
