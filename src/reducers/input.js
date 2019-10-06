import { INPUT_SET, INPUT_APPEND, INPUT_REPLACE } from '../actions';

const initialState = '';

/** Calculator input display reducer
 * @param {string} state current state
 * @param {object} action flux standard action
 * @return {string} next state
 */
export const input = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_SET:
      return action.payload;
    case INPUT_APPEND:
      return state.concat(action.payload);
    case INPUT_REPLACE:
      return state.substr(0, state.length - 1).concat(action.payload);
    default:
      return state;
  }
};
