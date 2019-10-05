import { ISOPERATOR_TOGGLE } from '../actions';

const initialState = true;

export const isOperator = (state = initialState, action = {}) => {
  switch (action.type) {
    case ISOPERATOR_TOGGLE:
      return !state;
    default:
      return state;
  }
};
