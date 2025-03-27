import React, { useEffect, useState } from "react";

function BananaGenerator({ money, setMoney }) {
  const [bananas, setBananas] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const bananaValue = Math.floor(Math.random() * 100000) + 1;
      setBananas((prev) => [...prev, bananaValue]);
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Banana Inventory</h2>
      <ul>
        {bananas.map((value, index) => (
          <li key={index}>🍌 Banana worth ${value}</li>
        ))}
      </ul>
    </div>
  );
}

export default BananaGenerator;
