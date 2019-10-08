import React from 'react';
import PropTypes from 'prop-types';
import { pipe } from '../lib/lib';

import { CalcButton, CalcDisplay } from '../components';

const log = (val) => {
  console.log(val);
  return val;
};

/**
 * Calculator component
 * @param {object} props
 * @return {ReactElement}
 */
export const Calculator = (props) => {
  // event handlers
  const { equalClick, clearAll, operandClick, operatorClick } = props;

  const makeButton = (modifier = 'square') => (clickHandler = log) => (
      value
  ) => (
    <CalcButton
      value={value}
      modifier={modifier}
      onClick={clickHandler}
    />
  );

  const operandButton = (modifier = 'square') =>
    makeButton(modifier)(
        pipe(
            log,
            operandClick(props)
        )
    );

  const operatorButton = (modifier = 'square') =>
    makeButton(modifier)(
        pipe(
            log,
            operatorClick(props)
        )
    );

  const handleKeyPress = (event) => {
    const numbers = new Set([
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']);
    const operators = new Set(['+', '-', '/', '*']);
    const numeric = numbers.has(event.key);
    const operator = operators.has(event.key);
    const enter = event.key === 'Enter';

    if (numeric) operandClick(props)(event.key);
    if (operator) operatorClick(props)(event.key);
    if (enter) equalClick(props)();
  };

  /**
   * Create input string from operands and operators
   * @param  {string[]} operands
   * @param  {string[]} operators
   * @return {string}  string representation of current input formula
   */
  const formatInput = ({ operands, operators }) => {
    const _operands = [...operands];
    return operators.reduce(
        (acc, op) => acc + ` ${op} ` + (_operands.shift() || ''),
        _operands.shift()
    );
  };

  const numpad = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
  ];
  const display = { output: props.display.output, input: formatInput(props) };

  return (
    <div
      class="calc"
      onKeyDown={handleKeyPress}
      tabIndex="0"
    >
      <CalcDisplay {...display} />
      <div class="calc-keypad">
        {makeButton('wide')(pipe(
            log,
            clearAll
        ))('AC')}
        {operatorButton()('/')}
        {numpad.map((row) => row.map(operandButton()))}
        {operandButton('wide')('0')}
        {operandButton()('.')}
      </div>
      <div class="calc-op-pad">
        {['*', '-', '+'].map(operatorButton())}
        {makeButton('tall')(pipe(
            log,
            equalClick(props)
        ))('=')}
      </div>
    </div>
  );
};

Calculator.propTypes = {
  isOperator: PropTypes.bool,
  operators: PropTypes.arrayOf(PropTypes.string),
  operands: PropTypes.arrayOf(PropTypes.string),
  display: PropTypes.shape({
    output: PropTypes.string,
  }),

  clearAll: PropTypes.func,
  equalClick: PropTypes.func,
  operandClick: PropTypes.func,
  operatorClick: PropTypes.func,
};
