import React, { FC, useState } from 'react';
import './NumberArray.scss';

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const NumberArray = () => {
  const [modification, setModification] = useState(number);
  const clonedNumber = [...modification];
  const numberModifier = [
    {
      title: 'Remove From End',
      numberAction: () => {
        clonedNumber.pop();
        setModification(clonedNumber);
      },
    },
    {
      title: 'Remove From Start',
      numberAction: () => {
        clonedNumber.shift();
        setModification(clonedNumber);
      },
    },
    {
      title: 'Reset',
      numberAction: () => {
        setModification(number);
      },
    },
    {
      title: 'Remove All',
      numberAction: () => {
        setModification([]);
      },
    },
    {
      title: 'Show > 5',
      numberAction: () => {
        setModification(modification.filter((element) => element > 5));
      },
    },
    {
      title: 'All Numbers x2',
      numberAction: () => {
        setModification(modification.map((element) => element * 2));
      },
    },
    {
      title: 'All Numbers /10',
      numberAction: () => {
        setModification(modification.map((element) => element / 10));
      },
    },
  ];

  return (
    <div className="numberArrayBox">
      <div>
        {' '}
        {numberModifier.map((action) => (
          <button className="button " type="button" onClick={action.numberAction}>
            {action.title}
          </button>
        ))}

      </div>

      <div>
        {modification.map((element, index) => (

          <button
            className="numberArrayNumbers"
            onClick={() => setModification(clonedNumber.filter((_, i) => i !== index))}
            type="button"
          >
            {element}
          </button>
        ))}

      </div>

    </div>
  );
};

export default NumberArray;
