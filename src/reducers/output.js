import { OUTPUT_SET, OUTPUT_APPEND, OUTPUT_CLEAR } from '../actions';

const initialState = '0';

/** Calculator output display reducer
 * @param {string} state current state
 * @param {object} action flux standard action
 * @return {string} next state
 */
export const output = (state = initialState, action = {}) => {
  switch (action.type) {
    case OUTPUT_SET:
      return action.payload;
    case OUTPUT_APPEND:
      return state.concat(action.payload);
    case OUTPUT_CLEAR:
      return initialState;
    default:
      return state;
  }
};
