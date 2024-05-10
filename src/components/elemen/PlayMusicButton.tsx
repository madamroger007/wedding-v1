import useSound from "use-sound";
import { FaPlay,FaStop  } from "react-icons/fa";
import { SoundLove } from "../data.d";
import React from "react";
export default function PlayMusicButton() {
  const [playSound, setPlaySound] = React.useState(false);
  const [play, { stop }] = useSound(SoundLove);

  const HandlePlaySound = () => {
    if (playSound) {
      stop();
    } else {
      play();
    }
    setPlaySound(!playSound);
    console.log(playSound);
  };
  return (
    <div onClick={HandlePlaySound} className="bg-blue-700 p-5 rounded-full fixed right-0 bottom-0 m-5">
      <span role="img" aria-label="trumpet">
        {playSound ? <FaStop/> : <FaPlay  />}
      </span>
    </div>
  );
}
