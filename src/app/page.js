"use client";
import { useState } from "react"; // management data local
import styles from "./page.module.css";
import Calculator from "./Calculator";

export default function Home() {
  const [counter, setCounter] = useState(1);

  return (
    <main>
      <div className={styles.counter}>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <br />
      <br />
      <Calculator />
    </main>
  );
}
