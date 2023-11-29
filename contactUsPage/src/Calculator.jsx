import React, { useState } from "react";
import "./calculator.css";
import Swal from 'sweetalert2';
 const Calculator = () => {
  const [valueA, setvalueA] = useState(0);
  const [valueB, setvalueB] = useState(0);
  const [results, setresults] = useState(0);

  function calculate(a, b, operation) {
    switch (operation) {
      case "+":
        setresults(a + b);

        break;
      case "-":
        setresults(a - b);

        break;
      case "*":
        setresults(a * b);

        break;
      case "/":
       try {
        
        if(isNaN(a/b) || !isFinite(a/b))
        {
            throw new error("Division Error");
        }
        setresults(a/b);

       } catch (error) {
        Swal.fire("Infinite you can't divide by 0");
       }

      setresults(a / b);
        break;
      case "%":
        setresults(a % b);

        break;
      default:
        break;
    }
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="wrapper">
            <h1>Simple Calculator</h1>
        <form className="inputs">
          <input
            type="number"
            placeholder="a"
            value={valueA}
            onChange={(e) => {
              setvalueA(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="b"
            value={valueB}
            onChange={(e) => {
              setvalueB(e.target.value);
            }}
          />
        </form>
        <div className="buttons">
          <button
            onClick={() => {
              calculate(Number(valueA), Number(valueB), "+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              calculate(Number(valueA), Number(valueB), "-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              calculate(Number(valueA), Number(valueB), "*");
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              calculate(Number(valueA), Number(valueB), "/");
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              calculate(Number(valueA), Number(valueB), "%");
            }}
          >
            %
          </button>
        </div>

        <div className="results">
          <label >Results</label>
          <output>{results}</output>
        </div>  
        </div>
      </div>
    </React.Fragment>
  );
};
export default Calculator;
