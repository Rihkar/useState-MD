import React, { FC, useState } from 'react';
import './Kartinas.scss';

const Kartinas = () => {
  const cards = [
    {
      id: 'ID:1',
      title: 'TITLE: First Card',
      close: 'X',
    },
    {
      id: 'ID:2',
      title: 'TITLE: Second Card',
      close: 'X',
    },
    {
      id: 'ID:3',
      title: 'TITLE: Third Card',
      close: 'X',
    },
    {
      id: 'ID:4',
      title: 'TITLE: Fourth Card',
      close: 'X',
    },
    {
      id: 'ID:5',
      title: 'TITLE: Fifth Card',
      close: 'X',
    },
    {
      id: 'ID:6',
      title: 'TITLE: Sixth Card',
      close: 'X',
    },
  ];

  const [card, setCard] = useState(cards);
  const cardModifier = [
    {
      title: 'RESET',
      cardFunction: () => {
        setCard(cards);
      },
    },
    {
      title: 'REMOVE ALL',
      cardFunction: () => {
        setCard([]);
      },
    },
    {
      title: 'UPPERCASE',
      cardFunction: () => {
        setCard(card.map((element) => ({
          ...element, title: element.title.toUpperCase(),
        })));
      },
    },
  ];

  return (
    <div className="card-container">
      <div>

        {cardModifier.map((element) => (
          <button className="button" type="button" onClick={element.cardFunction}>
            {element.title}
          </button>
        ))}

      </div>

      <div className="cardBox">

        {card.map((element, index) => (
          <div className="card">
            <span>

              {element.id}
            </span>
            <span className="close" onClick={() => setCard(card.filter((_, i) => i !== index))}>
              {element.close}

            </span>
            <br />
            <span>{element.title}</span>
          </div>
        ))}

      </div>

    </div>
  );
};
export default Kartinas;
