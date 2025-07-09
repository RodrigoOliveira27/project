import React, { useState } from "react";

const Calculator2: React.FC = () => {
  const [num1, setNum1] = useState<number | "">("");
  const [num2, setNum2] = useState<number | "">("");
  const [operador, setOperador] = useState<"+" | "-" | "*" | "/">("+");

  const calcularResultado = (): number | string => {
    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) return "";

    switch (operador) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : "Erro: divisão por 0";
      default:
        return "";
    }
  };

  return (
    <div style={{ fontSize: "24px", textAlign: "center" }}>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value === "" ? "" : Number(e.target.value))}
        style={{ width: "60px", textAlign: "center" }}
      />

      <select
        value={operador}
        onChange={(e) => setOperador(e.target.value as "+" | "-" | "*" | "/")}
        style={{ margin: "0 10px", fontSize: "20px" }}
      >
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value === "" ? "" : Number(e.target.value))}
        style={{ width: "60px", textAlign: "center" }}
      />

      <span style={{ margin: "0 10px" }}>=</span>
      <span>{calcularResultado()}</span>
    </div>
  );
};

export default Calculator2;
