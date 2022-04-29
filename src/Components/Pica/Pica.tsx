import React, { FC, useState } from 'react';
import './Pica.scss';

const Pica = () => {
  const [Pizza, setPizza] = useState('');
  const morePizza = () => { setPizza(`${Pizza} PIZZA`); };
  return (
    <div className="picaBox">
      <button className="button" onClick={morePizza}>+PIZZA</button>
      <span>
        I LOVE:
        {Pizza}
      </span>
    </div>
  );
};
export default Pica;
