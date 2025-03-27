import React from "react";

function BananaShop({ money, setMoney }) {
  const handleSell = () => {
    setMoney(money + 100); // Placeholder for selling logic
  };

  return (
    <div>
      <h2>Banana Shop</h2>
      <button className="sell-button" onClick={handleSell}>
        Sell a Banana ($100)
      </button>
    </div>
  );
}

export default BananaShop;
