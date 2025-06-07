// src/Calculator.js

import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  // --- ESTADO (State) ---
  // `displayValue`: El valor que se muestra en la pantalla de la calculadora. Inicia en '0'.
  const [displayValue, setDisplayValue] = useState('0');
  // `firstOperand`: Almacena el primer número de una operación. Es `null` hasta que se introduce un número y un operador.
  const [firstOperand, setFirstOperand] = useState(null);
  // `operator`: Almacena el operador seleccionado (+, -, *, /).
  const [operator, setOperator] = useState(null);
  // `waitingForSecondOperand`: Un booleano que indica si estamos esperando el segundo número de una operación.
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  // --- LÓGICA DE LAS FUNCIONES ---

  // Función para manejar la entrada de dígitos (0-9)
  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      // Si estábamos esperando el segundo operando, el nuevo dígito reemplaza la pantalla.
      setDisplayValue(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      // Si no, se concatena el dígito, a menos que el valor actual sea '0'.
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  // Función para manejar la entrada del punto decimal
  const inputDecimal = () => {
    // Si estamos esperando el segundo operando, empezamos con "0."
    if (waitingForSecondOperand) {
      setDisplayValue('0.');
      setWaitingForSecondOperand(false);
      return;
    }
    // Añade el punto decimal solo si no existe ya uno en la pantalla.
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  // Función para limpiar la calculadora (botón AC)
  const clearAll = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  // Función para manejar los operadores (+, -, *, /) y el igual (=)
  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    // Si ya hay un operador y estábamos esperando el segundo número,
    // esto permite cambiar de operador (ej: 5 + * 3 -> 5 * 3)
    if (operator && waitingForSecondOperand) {
      setOperator(nextOperator);
      return;
    }
    
    // Si es la primera vez que se pulsa un operador
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      // Si ya tenemos un primer operando y un operador, realizamos el cálculo
      const result = performCalculation();
      setDisplayValue(String(parseFloat(result.toFixed(7)))); // Redondeamos para evitar decimales largos
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };
  
  // Objeto con las operaciones de cálculo
  const performCalculation = () => {
    const inputValue = parseFloat(displayValue);
    const prevValue = firstOperand;

    const operations = {
      '/': (first, second) => first / second,
      '*': (first, second) => first * second,
      '+': (first, second) => first + second,
      '-': (first, second) => first - second,
      '=': (first, second) => second,
    };

    if (operator in operations) {
      return operations[operator](prevValue, inputValue);
    }
    
    return inputValue;
  };

  // --- RENDERIZADO DEL COMPONENTE ---
  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="keypad">
        <div className="input-keys">
          <div className="function-keys">
            <button className="key key-ac" onClick={clearAll}>AC</button>
            {/* Otras teclas de función como +/- o % podrían ir aquí */}
          </div>
          <div className="digit-keys">
            <button className="key key-7" onClick={() => inputDigit(7)}>7</button>
            <button className="key key-8" onClick={() => inputDigit(8)}>8</button>
            <button className="key key-9" onClick={() => inputDigit(9)}>9</button>
            <button className="key key-4" onClick={() => inputDigit(4)}>4</button>
            <button className="key key-5" onClick={() => inputDigit(5)}>5</button>
            <button className="key key-6" onClick={() => inputDigit(6)}>6</button>
            <button className="key key-1" onClick={() => inputDigit(1)}>1</button>
            <button className="key key-2" onClick={() => inputDigit(2)}>2</button>
            <button className="key key-3" onClick={() => inputDigit(3)}>3</button>
            <button className="key key-0" onClick={() => inputDigit(0)}>0</button>
            <button className="key key-dot" onClick={inputDecimal}>.</button>
          </div>
        </div>
        <div className="operator-keys">
          <button className="key key-divide" onClick={() => handleOperator('/')}>÷</button>
          <button className="key key-multiply" onClick={() => handleOperator('*')}>×</button>
          <button className="key key-subtract" onClick={() => handleOperator('-')}>−</button>
          <button className="key key-add" onClick={() => handleOperator('+')}>+</button>
          <button className="key key-equals" onClick={() => handleOperator('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;