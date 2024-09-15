import React, { useContext } from "react";
import Topbar from "./components/Topbar";
import SidePane from "./components/SidePane";
import Player from "./components/Player";
import CenterPane from "./components/CenterPane";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <nav className="flex">
        <Topbar />
      </nav>
      <div className="flex overflow-auto">
        <SidePane />
        <CenterPane />
      </div>
      <div className="fixed w-full  bottom-0 my-0">
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </div>
  );
};

export default App;
