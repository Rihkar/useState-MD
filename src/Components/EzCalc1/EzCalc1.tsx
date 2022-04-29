import React, { FC, useState } from 'react';
import './EzCalc1.scss';

const EzCalc1 = () => {
  const [count, setCount] = useState(0);
  const actions = [
    {
      title: 'Add 1',
      mathAction: () => {
        setCount(count + 1);
      },
    },
    {
      title: 'Subtract 1',
      mathAction: () => {
        setCount(count - 1);
      },
    },
    {
      title: 'Reset',
      mathAction: () => {
        setCount(0);
      },
    },
  ];

  return (
    <section className="EzCalc1">

      {actions.map((action) => (
        <button className="EzCalc1--button" type="button" onClick={action.mathAction}>
          {action.title}
        </button>
      ))}
      <h1>{count}</h1>

    </section>
  );
};

export default EzCalc1;
