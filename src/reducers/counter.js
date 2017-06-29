import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import axios from 'axios';
import apiUrl from '../api/apiUrl';

// ------------------------------------
// Constants
// ------------------------------------
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const constants = {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
};

// ------------------------------------
// Actions
// ------------------------------------
export const increment = createAction('INCREMENT_COUNTER');
export const decrement = createAction('DECREMENT_COUNTER');

export const fetchTodos = () => {
  return (dispatch, getState) => {
    axios.post(`${apiUrl}/getTodo`, {'id': 1})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const actions = {
  fetchTodos,
  increment,
  decrement
};


const initialState = fromJS({
  count: 0
});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [INCREMENT_COUNTER]: (state, { payload: num }) => {
    const count = state.get('count') + num;
    return state.set('count', count);
  },
  [DECREMENT_COUNTER]: (state, { payload: num }) => {
    const count = state.get('count') - num;
    return count >= 0 ? state.set('count', count) : state;
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};
