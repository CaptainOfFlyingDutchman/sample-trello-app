import React, {PropTypes} from 'react';

const LaneButtons = ({ card, changeLane }) => {
    return (
      <div>
        <button disabled={card.lane === 'todo'}
          onClick={(e) => changeLane(e, 'todo')}>todo</button>

        <button disabled={card.lane === 'doing'}
          onClick={(e) => changeLane(e, 'doing')}>doing</button>

        <button disabled={card.lane === 'done'}
          onClick={(e) => changeLane(e, 'done')}>done</button>

        <button disabled={card.lane === 'pipeline'}
          onClick={(e) => changeLane(e, 'pipeline')}>pipeline</button>
      </div>
    );
};

LaneButtons.propTypes = {
  card: PropTypes.object.isRequired,
  changeLane: PropTypes.func.isRequired
};

export default LaneButtons;
