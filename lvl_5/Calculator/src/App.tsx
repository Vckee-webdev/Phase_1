import React, { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(true);

  const handleNumberClick = (number: string) => {
    if (shouldResetDisplay) {
      setDisplay(number);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? number : display + number);
    }
  };

  const handleOperatorClick = (op: string) => {
    setFirstNumber(display);
    setOperator(op);
    setShouldResetDisplay(true);
  };

  const calculate = () => {
    const a = parseFloat(firstNumber);
    const b = parseFloat(display);

    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: return b;
    }
  };

  const handleEquals = () => {
    const result = calculate();
    setDisplay(result.toString());
    setFirstNumber('');
    setOperator('');
    setShouldResetDisplay(true);
  };

  const clear = () => {
    setDisplay('0');
    setFirstNumber('');
    setOperator('');
    setShouldResetDisplay(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 p-4 rounded-xl w-full max-w-xs">
        <div className="bg-slate-700 p-3 rounded-lg mb-3">
          <div className="text-right text-white text-3xl font-mono truncate">
            {display}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <button onClick={clear} className="col-span-2 bg-red-500 text-white p-3 rounded-lg">C</button>
          <button onClick={() => handleOperatorClick('/')} className="bg-amber-500 text-white p-3 rounded-lg">/</button>
          <button onClick={() => handleOperatorClick('*')} className="bg-amber-500 text-white p-3 rounded-lg">*</button>

          {[7, 8, 9].map(num => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-slate-600 text-white p-3 rounded-lg"
            >
              {num}
            </button>
          ))}
          <button onClick={() => handleOperatorClick('-')} className="bg-amber-500 text-white p-3 rounded-lg">-</button>

          {[4, 5, 6].map(num => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-slate-600 text-white p-3 rounded-lg"
            >
              {num}
            </button>
          ))}
          <button onClick={() => handleOperatorClick('+')} className="bg-amber-500 text-white p-3 rounded-lg">+</button>

          {[1, 2, 3].map(num => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-slate-600 text-white p-3 rounded-lg"
            >
              {num}
            </button>
          ))}
          <button onClick={handleEquals} className="bg-green-500 text-white p-3 rounded-lg row-span-2">=</button>

          <button
            onClick={() => handleNumberClick('0')}
            className="bg-slate-600 text-white p-3 rounded-lg col-span-3"
          >
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;