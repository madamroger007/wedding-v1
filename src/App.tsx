import "./App.css";
import LayoutComponents from "./components/LayoutComponents";
import ModalComponents from "./components/ModalComponents";
import PlayMusicButton from "./components/elemen/PlayMusicButton";

function App() {
  return (
    <>
      <LayoutComponents>
        <ModalComponents />
        <PlayMusicButton/>
      </LayoutComponents>
    </>
  );
}

export default App;
