'use strict';
import register from 'ignore-styles';
import { test } from 'tape';
import deepFreeze from '../src/lib/deep-freeze';

import { evaluate, validExpression } from '../src/calculatorApp';

test('validExpression()', (t) => {
  {
    const operands = ['1'];
    const operators = ['+'];
    deepFreeze(operands);
    deepFreeze(operators);

    const msg = 'should be false if operands.length !== operators.length + 1';
    const actual = validExpression(operands, operators);
    const expected = false;
    t.equal(actual, expected, msg);
  }

  {
    const operands = ['1', '1'];
    const operators = ['+'];
    deepFreeze(operands);
    deepFreeze(operators);

    const msg = 'should be true if operands.length === operators.length + 1';
    const actual = validExpression(operands, operators);
    const expected = true;
    t.equal(actual, expected, msg);
  }
  t.end();
});

test('evaluate()', (t) => {
  {
    const operands = ['1', '1'];
    const operators = ['+'];
    deepFreeze(operands);
    deepFreeze(operators);

    const msg = '1 + 1 = 2';
    const actual = evaluate(operands, operators);
    const expected = 2;
    t.deepEqual(actual, expected, msg);
  }
  {
    const operands = ['1.5', '1'];
    const operators = ['+'];
    deepFreeze(operands);
    deepFreeze(operators);

    const msg = '1.5 + 1 = 2.5';
    const actual = evaluate(operands, operators);
    const expected = 2.5;
    t.deepEqual(actual, expected, msg);
  }
  {
    const operands = ['2', '2'];
    const operators = ['*'];
    deepFreeze(operands);
    deepFreeze(operators);

    const msg = '2 * 2 = 4';
    const actual = evaluate(operands, operators);
    const expected = 4;
    t.deepEqual(actual, expected, msg);
  }
  {
    const operands = ['4', '2'];
    const operators = ['/'];
    deepFreeze(operands);
    deepFreeze(operators);

    const msg = '4 / 2 = 2';
    const actual = evaluate(operands, operators);
    const expected = 2;
    t.deepEqual(actual, expected, msg);
  }
  {
    const operands = ['6', '2'];
    const operators = ['-'];
    deepFreeze(operands);
    deepFreeze(operators);

    const msg = '6 - 2 = 4';
    const actual = evaluate(operands, operators);
    const expected = 4;
    t.deepEqual(actual, expected, msg);
  }
  {
    const operands = ['20', '1', '2'];
    const operators = ['+', '*'];
    deepFreeze(operands);
    deepFreeze(operators);

    const msg = '1 + 1 = 2';
    const actual = evaluate(operands, operators);
    const expected = 42;
    t.deepEqual(actual, expected, msg);
  }
  t.end();
});
