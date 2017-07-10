import * as types from './actionTypes';
import lanesApi from '../api/mockLanesApi';

export const loadLanesSuccess = (lanes) => {
  return { type: types.LOAD_LANES_SUCCESS, lanes};
};

export const loadLanes = () => {
  return dispatch => {
    return lanesApi.getAllLanes().then(lanes => {
      dispatch(loadLanesSuccess(lanes));
    }).catch(error => {
      throw(error);
    });
  };
};
