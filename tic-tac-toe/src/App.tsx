import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [buttonVisible, setButtonVisible] = useState(true);

  return (
    <div className="game">
      <div className="game-board">
        <Game />
        {buttonVisible && <button onClick={() => setButtonVisible(false)} />}
      </div>
    </div>
  );
}

export default App;
