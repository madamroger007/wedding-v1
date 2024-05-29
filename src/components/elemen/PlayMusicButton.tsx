import useSound from "use-sound";
import { FaPlay,FaStop  } from "react-icons/fa";
import { SoundLove } from "../data.d";
import React from "react";
export default function PlayMusicButton() {
  const [playSound, setPlaySound] = React.useState(false);
  const [play, { stop }] = useSound(SoundLove);


  React.useEffect(() => {
    play();
    setPlaySound(true);
  }, [play]);

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
    <div onClick={HandlePlaySound} className="audio-play">
      <span role="img" aria-label="trumpet" className="flex justify-center items-center w-full h-full">
        {playSound ? <FaStop className="text-blue-700"/> : <FaPlay className="text-blue-700" />}
      </span>
    </div>
  );
}
