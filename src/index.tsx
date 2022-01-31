import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WordleApp from "./WordleApp";
import { GameProvider } from "./context/GameContext";

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <WordleApp />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
