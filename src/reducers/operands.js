import { OPERAND_APPEND, OPERAND_ADD, OPERAND_CLEAR } from '../actions';

const initialState = '';

/** operand reducer
 * @param {string} state current state
 * @param {object} action flux standard action
 * @return {string} next state
 */
const operand = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPERAND_APPEND:
      const doubleDot = (action.payload === '.' && state.substr(-1) === '.');
      if (doubleDot) return state;
      const appendedValue = state + action.payload;
      return trimLeadZero(appendedValue);
    case OPERAND_ADD:
      return trimLeadZero(action.payload);
    case OPERAND_CLEAR:
      return initialState;
    default:
      return state;
  }
};

/** trim leading zeroes from string
 * @param {string} value
 * @return {string}
 */
const trimLeadZero = (value) => {
  const re = /^0?(.*)/;
  const trimmed = value.match(re)[1];
  return trimmed || '0';
};

const initialOperandsState = [];

/** operands reducer
 * @param {string} state current state
 * @param {object} action flux standard action
 * @return {string} next state
 */
export const operands = (state = initialOperandsState, action = {}) => {
  switch (action.type) {
    case OPERAND_APPEND:
      return [
        ...state.slice(0, state.length - 1),
        operand(state[state.length - 1], action),
      ];
    case OPERAND_ADD:
      return [...state, operand(undefined, action)];
    case OPERAND_CLEAR:
      return initialOperandsState;
    default:
      return state;
  }
};
