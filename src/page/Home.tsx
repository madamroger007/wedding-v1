import React from "react";
import LayoutComponents from "../components/LayoutComponents";
import ModalComponents from "../components/elemen/ModalComponents";
import PlayMusicButton from "../components/elemen/PlayMusicButton";
import HeroBgSection from "../components/section/HeroBgSection";

function Home() {
 
  return (
    <LayoutComponents>
      <ModalComponents />
      <PlayMusicButton />
      <div>
        <HeroBgSection/>
      </div>
    </LayoutComponents>
  );
}

export default Home;
