import React, { useState } from "react";
import "./xcalculator.css";
const Xcalculator = () => {
  const [expression, setExpression] = useState("");
  const [final, setFinal] = useState("");
  const appendNum = (num) => {
    setExpression(expression + num);
  };
  const handleoperator = (op) => {
    setExpression(expression + op);
  };
  const handlereset = () => {
    setExpression("");
    setFinal("");
  };
  const calculate = () => {
    function evaluate(expression) {
      if (expression === "") {
        return "Error";
      }
      let tokens = expression.split("");

      // Stack for numbers: 'values'
      let values = [];

      // Stack for Operators: 'ops'
      let ops = [];

      for (let i = 0; i < tokens.length; i++) {
        // Current token is a whitespace, skip it
        if (tokens[i] === " ") {
          continue;
        }
        if (tokens[i] >= "0" && tokens[i] <= "9") {
          let sbuf = "";
          while (i < tokens.length && tokens[i] >= "0" && tokens[i] <= "9") {
            sbuf = sbuf + tokens[i++];
          }
          values.push(parseInt(sbuf, 10));
          i--;
        } else if (tokens[i] === "(") {
          ops.push(tokens[i]);
        } else if (tokens[i] === ")") {
          while (ops[ops.length - 1] !== "(") {
            values.push(applyOp(ops.pop(), values.pop(), values.pop()));
          }
          ops.pop();
        } else if (
          tokens[i] === "+" ||
          tokens[i] == "-" ||
          tokens[i] == "*" ||
          tokens[i] == "/"
        ) {
          while (
            ops.length > 0 &&
            hasPrecedence(tokens[i], ops[ops.length - 1])
          ) {
            values.push(applyOp(ops.pop(), values.pop(), values.pop()));
          }
          ops.push(tokens[i]);
        }
      }
      while (ops.length > 0) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
      }
      return values.pop();
    }
    function hasPrecedence(op1, op2) {
      if (op2 === "(" || op2 === ")") {
        return false;
      }
      if ((op1 === "*" || op1 === "/") && (op2 === "+" || op2 === "-")) {
        return false;
      } else {
        return true;
      }
    }
    function applyOp(op, b, a) {
      // eslint-disable-next-line default-case
      switch (op) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
      }
      return 0;
    }
    setFinal(evaluate(expression));
    console.log(final);
  };
  return (
    <div>
      <h1>React Calculator</h1>
      <div style={{ padding: "1rem" }}>
        <input type="text" value={expression} />
      </div>
      {final}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <button onClick={() => appendNum(7)}>7</button>
        </div>
        <div>
          <button onClick={() => appendNum(8)}>8</button>
        </div>
        <div>
          <button onClick={() => appendNum(9)}>9</button>
        </div>
        <div>
          <button onClick={() => handleoperator("+")}>+</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <button onClick={() => appendNum(4)}>4</button>
        </div>
        <div>
          <button onClick={() => appendNum(5)}>5</button>
        </div>
        <div>
          <button onClick={() => appendNum(6)}>6</button>
        </div>
        <div>
          <button onClick={() => handleoperator("-")}>-</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <button onClick={() => appendNum(1)}>1</button>
        </div>
        <div>
          <button onClick={() => appendNum(2)}>2</button>
        </div>
        <div>
          <button onClick={() => appendNum(3)}>3</button>
        </div>
        <div>
          <button onClick={() => handleoperator("*")}>*</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <button onClick={() => handlereset()}>C</button>
        </div>
        <div>
          <button onClick={() => appendNum(0)}>0</button>
        </div>
        <div>
          <button onClick={() => calculate()}>=</button>
        </div>
        <div>
          <button onClick={() => handleoperator("/")}>/</button>
        </div>
      </div>
    </div>
  );
};
export default Xcalculator;
