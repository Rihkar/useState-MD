import React, { FC, useState } from 'react';
import './Input.scss';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="inputBox">
      <input
        className="input"
        type="text"
        placeholder="Text here"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <div className="bigText">{inputValue}</div>
    </div>

  );
};
export default Input;
