import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNumber = (number) => {
    if (isNewNumber) {
      setDisplay(number);
      setIsNewNumber(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator) => {
    setEquation(display + ' ' + operator + ' ');
    setIsNewNumber(true);
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
      setIsNewNumber(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setIsNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setIsNewNumber(true);
  };

  const Button = ({ value, onClick, className }) => (
    <button
      onClick={onClick}
      className={`p-4 text-xl font-bold rounded-lg transition-colors ${className}`}
    >
      {value}
    </button>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <div className="mb-4">
          <div className="text-gray-500 text-right h-6 text-sm">{equation}</div>
          <div className="text-4xl text-right font-bold truncate">{display}</div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <Button 
            value="C" 
            onClick={handleClear}
            className="bg-red-500 text-white hover:bg-red-600"
          />
          <Button 
            value="(" 
            onClick={() => handleNumber('(')}
            className="bg-gray-200 hover:bg-gray-300"
          />
          <Button 
            value=")" 
            onClick={() => handleNumber(')')}
            className="bg-gray-200 hover:bg-gray-300"
          />
          <Button 
            value="÷" 
            onClick={() => handleOperator('/')}
            className="bg-blue-500 text-white hover:bg-blue-600"
          />
          
          <Button 
            value="7" 
            onClick={() => handleNumber('7')}
            className="bg-gray-100 hover:bg-gray-200"
          />
          <Button 
            value="8" 
            onClick={() => handleNumber('8')}
            className="bg-gray-100 hover:bg-gray-200"
          />
          <Button 
            value="9" 
            onClick={() => handleNumber('9')}
            className="bg-gray-100 hover:bg-gray-200"
          />
          <Button 
            value="×" 
            onClick={() => handleOperator('*')}
            className="bg-blue-500 text-white hover:bg-blue-600"
          />
          
          <Button 
            value="4" 
            onClick={() => handleNumber('4')}
            className="bg-gray-100 hover:bg-gray-200"
          />
          <Button 
            value="5" 
            onClick={() => handleNumber('5')}
            className="bg-gray-100 hover:bg-gray-200"
          />
          <Button 
            value="6" 
            onClick={() => handleNumber('6')}
            className="bg-gray-100 hover:bg-gray-200"
          />
          <Button 
            value="-" 
            onClick={() => handleOperator('-')}
            className="bg-blue-500 text-white hover:bg-blue-600"
          />
          
          <Button 
            value="1" 
            onClick={() => handleNumber('1')}
            className="bg-gray-100 hover:bg-gray-200"
          />
          <Button 
            value="2" 
            onClick={() => handleNumber('2')}
            className="bg-gray-100 hover:bg-gray-200"
          />
          <Button 
            value="3" 
            onClick={() => handleNumber('3')}
            className="bg-gray-100 hover:bg-gray-200"
          />
          <Button 
            value="+" 
            onClick={() => handleOperator('+')}
            className="bg-blue-500 text-white hover:bg-blue-600"
          />
          
          <Button 
            value="0" 
            onClick={() => handleNumber('0')}
            className="col-span-2 bg-gray-100 hover:bg-gray-200"
          />
          <Button 
            value="." 
            onClick={() => handleNumber('.')}
            className="bg-gray-100 hover:bg-gray-200"
          />
          <Button 
            value="=" 
            onClick={handleEqual}
            className="bg-green-500 text-white hover:bg-green-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;