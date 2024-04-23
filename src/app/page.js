"use client";
import { useState } from "react"; // management data local
import styles from "./page.module.css";
// import { Calculator } from "./Calculator";
// import ToDoList from "./ToDoList";
import SampleApp from "./SampleApp";

export default function Home() {
  const [value, setValue] = useState(1);

  return (
    <main>
      {/* <div className={styles.value}>
        <button onClick={(event) => setValue(value - 1)}>-</button>
        <div>{value}</div>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
      <br />
      <br /> */}
      {/* <Calculator />
      <ToDoList /> */}
      <SampleApp />
    </main>
  );
}
