import React, { useEffect, useState, type FormEvent } from "react";

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<number>();
  const [num2, setNum2] = useState<number>();
  const [resultado, setResultado] = useState<number>();

  const changeNum1 = (input: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(input.target.value);
    if (!isNaN(num)) {
      setNum1(num);
    }
  };

  const changeNum2 = (input: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(input.target.value);
    if (!isNaN(num)) {
      setNum2(num);
    }
  };
  useEffect(() => {
    console.log(num1, num2, resultado);
    if (
      num1 !== undefined &&
      num2 !== undefined &&
      !(isNaN(num1) && isNaN(num2))
    ) {
      console.log(num1, num2, resultado);
      setResultado(num1 + num2);
    }
  }, [num1, num2]);
  return (
    <div style={{ fontSize: "24px", textAlign: "center" }}>
      <input
        type="number"
        value={num1}
        onChange={(input) => changeNum1(input)}
        style={{ width: "60px", textAlign: "center" }}
      />
      <span style={{ margin: "0 10px" }}>+</span>
      <input
        type="number"
        value={num2}
        onChange={changeNum2}
        style={{ width: "60px", textAlign: "center" }}
      />
      <span style={{ margin: "0 10px" }}>=</span>
      <span>{resultado}</span>
    </div>
  );
};

export default Calculator;
