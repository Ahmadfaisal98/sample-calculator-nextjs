import { useState } from "react";
import styles from "./calculator.module.css";
import "./calculator.css";

const Button = ({ value, setDisplay, display }) => {
  function onClickHandler(value) {
    if (!["C", "="].includes(value)) {
      // for append to display
      setDisplay((prev) => {
        return prev + value;
      });
    } else if (value === "C") {
      // to remove
      setDisplay("");
    } else if (value === "=") {
      // calculate
      function calculate(fn) {
        return new Function("return " + fn)();
      }
      const finalValue = calculate(display);
      setDisplay(String(finalValue));
    }
  }

  return (
    <button className={styles.button} onClick={() => onClickHandler(value)}>
      {value}
    </button>
  );
};

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const values = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "C", "=", "/"];
  return (
    <div className="container">
      <div id="calculator">
        <input
          style={{ height: "30px", width: "100%" }}
          id="display"
          value={display}
          onChange={(e) => setDisplay(e.target.value)}
        />
        <br />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {values.map((value) => (
            <Button
              value={value}
              key={value}
              setDisplay={setDisplay}
              display={display}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
