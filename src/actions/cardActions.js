import * as types from './actionTypes';
import cardsApi from '../api/mockCardsApi';

export const loadCardsSuccess = (cards) => {
  return { type: types.LOAD_CARDS_SUCCESS, cards};
};

export const loadCards = () => {
  return dispatch => {
    return cardsApi.getAllCards().then(cards => {
      dispatch(loadCardsSuccess(cards));
    }).catch(error => {
      throw(error);
    });
  };
};

export const cardLaneChangeSuccess = (card) => {
  return { type: types.CARD_LANE_CHANGE_SUCCESS, card };
};

export const changeCard = (cardId, lane) => {
  return dispatch => {
    return cardsApi.changeCard(cardId, lane).then(card => {
      dispatch(cardLaneChangeSuccess(card));
    }).catch(error => {
      throw(error);
    });
  };
};
