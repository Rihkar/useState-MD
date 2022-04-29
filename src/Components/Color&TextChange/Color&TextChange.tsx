import React, { FC, useState } from 'react';
import './Color&TextChange.scss';

const ColorAndTextChange = () => {
  const [color, setColor] = useState('gold');
  const [press, setPress] = useState('Nav Nospiests');

  return (

    <div className="ColorAndTextChangeContainer">

      <div>

        <button className="button" onClick={() => setColor('blue')}> Change Color</button>

        <div style={{ backgroundColor: color }}>
          oyoyoy
        </div>
      </div>

      <div>
        <button className="button" onClick={() => setPress('Nospiests')}>  Nospiest</button>

        <div>
          {press}
        </div>
      </div>
    </div>

  );
};

export default ColorAndTextChange;
