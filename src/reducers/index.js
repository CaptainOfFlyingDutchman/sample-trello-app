import {combineReducers} from 'redux';

import lanes from './laneReducer';
import cards from './cardReducer';

const rootReducer = combineReducers({
  lanes,
  cards
});

export default rootReducer;
