import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function laneReducer(state = initialState.lanes, action) {
  switch (action.type) {
    case types.LOAD_LANES_SUCCESS:
      return action.lanes;

    default:
      return state;
  }
}
