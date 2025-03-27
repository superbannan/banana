import React, { useState } from "react";
import BananaGenerator from "./BananaGenerator";
import BananaShop from "./BananaShop";
import "./styles.css";

function App() {
  const [money, setMoney] = useState(0);
  const [clickValue, setClickValue] = useState(1);

  const handleClick = () => {
    setMoney(money + clickValue);
  };

  const upgradeClick = () => {
    const cost = clickValue * 10;
    if (money >= cost) {
      setMoney(money - cost);
      setClickValue(clickValue * 2);
    } else {
      alert("Not enough money to upgrade!");
    }
  };

  return (
    <div className="container">
      <h1>Banana Clicker 🍌</h1>
      <p>Money: ${money}</p>
      <button className="banana-button" onClick={handleClick}>
        🍌 Click Me!
      </button>
      <button className="upgrade-button" onClick={upgradeClick}>
        Upgrade Click (${clickValue * 10})
      </button>
      <BananaGenerator money={money} setMoney={setMoney} />
      <BananaShop money={money} setMoney={setMoney} />
    </div>
  );
}

export default App;
