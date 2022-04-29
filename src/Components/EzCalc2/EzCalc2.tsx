import React, { FC, useState } from 'react';
import './EzCalc2.scss';

const EzCalc2 = () => {
  const [count, setCount] = useState(0);
  const actions = [
    {
      title: 'Add 10',
      mathAction: () => {
        setCount(count + 10);
      },
    },
    {
      title: 'Subtract 10',
      mathAction: () => {
        setCount(count - 10);
      },
    },
    {
      title: 'Multiply by 10',
      mathAction: () => {
        setCount(count * 10);
      },
    },
    {
      title: 'Divide by 10',
      mathAction: () => {
        setCount(count / 10);
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
    <section className="EzCalc2">

      {actions.map((action) => (
        <button className="EzCalc2--button " type="button" onClick={action.mathAction}>
          {action.title}
        </button>
      ))}
      <h1>{count}</h1>

    </section>
  );
};

export default EzCalc2;
