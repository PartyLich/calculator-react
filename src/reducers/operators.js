import { OPERATOR_ADD, OPERATOR_REPLACE, OPERATOR_CLEAR } from '../actions';

const initialState = [];

export const operators = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPERATOR_ADD:
      return [...state, action.payload];
    case OPERATOR_REPLACE:
      return [...state.slice(0, state.length - 1), action.payload];
    case OPERATOR_CLEAR:
      return initialState;
    default:
      return state;
  }
};
