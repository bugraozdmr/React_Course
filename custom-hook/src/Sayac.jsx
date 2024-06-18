import React, { useState } from "react";
import UseCounter from "./UseCounter";

export default function Sayac() {
  const [num, increment, decrement, reset] = UseCounter();
  return (
    <div>
      sayı = {num}
      <div>
        <button onClick={increment}>Arttır</button>
        <button onClick={decrement}>Azalt</button>
        <button onClick={reset}>Sıfırla</button>
      </div>
    </div>
  );
}
