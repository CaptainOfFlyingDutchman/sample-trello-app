import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cardReducer(state = initialState.cards, action) {
  switch (action.type) {
    case types.LOAD_CARDS_SUCCESS:
      return action.cards;

    case types.CARD_LANE_CHANGE_SUCCESS:
      return [
        ...state.filter(card => card.id !== action.card.id),
        Object.assign({}, action.card)
      ];

    default:
      return state;
  }
}
