import React, {PropTypes} from 'react';
import Lane from './Lane';

import * as cardActions from '../actions/cardActions';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Board extends React.Component {
  filter(cards, lane) {
    return cards.filter(card => card.lane === lane);
  }

  render() {
    const { lanes, cards } = this.props;
    const { changeCard } = this.props.cardActions;

    return (
      <ul className="lanes">
        {
          lanes.map((lane, i) => {
            const filteredCards = this.filter(cards, lane);
            return <li key={i}><Lane lane={lane} cards={filteredCards} changeCard={changeCard} /></li>;
          })
        }
      </ul>
    );
  }
}

Board.propTypes = {
  lanes: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired,
  cardActions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    lanes: state.lanes,
    cards: state.cards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cardActions: bindActionCreators(cardActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
