/**
 * Calculator frontend lib project.
 * Bit of a monolithic nightmare in the codepen version. If you have any tips on
 * organizing within codepen, please send them my way
 */
import React from 'react';
import ReactDOM from 'react-dom';

// Webpack
import './style.scss';
window.React = React;

import {
  setInput,
  appendInput,
  replaceInput,
  setOutput,
  addOperator,
  replaceOperator,
  clearOperator,
  addOperand,
  appendOperand,
  clearOperand,
  toggleIsOperator,
  resetRoot,
} from './actions';

import { input, output, operators, operands, isOperator } from './reducers';

import { createStore, combineReducers } from 'redux';
const display = combineReducers({
  input,
  output,
});
const rootReducer = combineReducers({
  display,
  operators,
  operands,
  isOperator,
});

const calculatorApp = (state, action) => {
  switch (action.type) {
    case 'ROOT_RESET':
      return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

const store = createStore(calculatorApp);

import { Calculator } from './components/Calculator';

// map symbols to operations
const opMap = {
  '/': (a) => (b) => a / b,
  '+': (a) => (b) => a + b,
  '-': (a) => (b) => a - b,
  '*': (a) => (b) => a * b,
};
const evaluate = (_operands, _operators) => {
  const operands = _operands.map(parseFloat);
  const operators = [..._operators];
  return operators.reduce(
      (acc, op) => opMap[op](acc)(operands.shift()),
      operands.shift()
  );
};

// object -> string -> string
const operatorClick = ({
  isOperator,
  display: { output },
  operands,
}) => (value) => {
  if (isOperator) {
    if (operands.length === 0) {
      store.dispatch(addOperand(output));
      store.dispatch(appendInput(output));
    }

    store.dispatch(appendInput(value));
    store.dispatch(addOperator(value));
    store.dispatch(toggleIsOperator());
  } else {
    store.dispatch(replaceOperator(value));
    store.dispatch(replaceInput(value));
  }

  return value;
};

// object -> string -> string
const operandClick = ({
  isOperator = true,
}) => (value) => {
  if (isOperator) {
    store.dispatch(appendOperand(value));
  } else {
    store.dispatch(addOperand(value));
    store.dispatch(toggleIsOperator());
  }

  store.dispatch(appendInput(value));
  return value;
};

const validExpression = (operands, operators) =>
  operands.length - operators.length === 1;

const equalClick = ({ operands, operators }) => (value) => {
  if (validExpression(operands, operators)) {
    const result = evaluate(operands, operators).toString();
    store.dispatch(setOutput(result));
    store.dispatch(setInput(''));

    store.dispatch(clearOperator());
    store.dispatch(clearOperand());
  }

  return value;
};

// reset state
const clearAll = (value) => {
  store.dispatch(resetRoot());
  return value;
};

const handlers = {
  clearAll,
  equalClick,
  operandClick,
  operatorClick,
};

const render = () => {
  if (typeof window !== 'undefined') {
    ReactDOM.render(
        <Calculator
          {...store.getState()}
          {...handlers}
        />,
        document.getElementById('calc-root')
    );
  }
};

store.subscribe(render);
render();

export { display, evaluate, validExpression };
