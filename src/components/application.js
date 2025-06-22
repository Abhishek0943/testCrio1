import React, { useState } from "react";

function Application() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumber = (number) => {
    setCurrentNumber(currentNumber + number);
  };

  const handleOperator = (op) => {
    if (currentNumber === "") return;
    if (operator !== "") {
      calculate();
    }
    setPreviousNumber(currentNumber);
    setCurrentNumber("");
    setOperator(op);
  };

  const calculate = () => {
    if (currentNumber === "" || operator === "") return;
    let result;
    try {
      switch (operator) {
        case "+":
          result = parseFloat(previousNumber) + parseFloat(currentNumber);
          break;
        case "-":
          result = parseFloat(previousNumber) - parseFloat(currentNumber);
          break;
        case "*":
          result = parseFloat(previousNumber) * parseFloat(currentNumber);
          break;
        case "/":
          if (currentNumber === "0") {
            result = "Error";
          } else {
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
          }
          break;
        default:
          result = "";
      }
    } catch (error) {
      result = "Error";
    }
    setCurrentNumber(result);
    setPreviousNumber("");
    setOperator("");
  };

  const clearDisplay = () => {
    setCurrentNumber("");
    setPreviousNumber("");
    setOperator("");
  };

  return (
    <div className="calculator">
      <input type="text" id="display" value={currentNumber} readOnly />
      <div id="result">
        {previousNumber}
        {operator}
      </div>
      <button onClick={() => handleNumber("7")}>7</button>
      <button onClick={() => handleNumber("8")}>8</button>
      <button onClick={() => handleNumber("9")}>9</button>
      <button onClick={() => handleOperator("/")}>/</button>
      <br />
      <button onClick={() => handleNumber("4")}>4</button>
      <button onClick={() => handleNumber("5")}>5</button>
      <button onClick={() => handleNumber("6")}>6</button>
      <button onClick={() => handleOperator("*")}>*</button>
      <br />
      <button onClick={() => handleNumber("1")}>1</button>
      <button onClick={() => handleNumber("2")}>2</button>
      <button onClick={() => handleNumber("3")}>3</button>
      <button onClick={() => handleOperator("-")}>-</button>
      <br />
      <button onClick={() => handleNumber("0")}>0</button>
      <button onClick={clearDisplay}>C</button>
      <button onClick={() => handleOperator("+")}>+</button>
      <button onClick={calculate}>=</button>
    </div>
  );
}

export default Application;
