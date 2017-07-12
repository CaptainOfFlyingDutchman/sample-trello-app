import React, {PropTypes} from 'react';
import Card from './Card';

const Lane = ({ lane, cards, changeCard }) => {
  return (
    <div>
      <h3>{lane}</h3>
      <ul>
        {
          cards.map((card) => {
            return <li key={card.id}><Card card={card} changeCard={changeCard} /></li>;
          })
        }
      </ul>
    </div>
  );
};

Lane.propTypes = {
  lane: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  changeCard: PropTypes.func.isRequired
};

export default Lane;
