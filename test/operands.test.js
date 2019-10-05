import { test } from 'tape';
import deepFreeze from '../src/lib/deep-freeze';

import { OPERAND_APPEND, OPERAND_ADD, OPERAND_CLEAR } from '../src/actions';
import { operands } from '../src/reducers';

test('operands reducer', function (t) {
  {
    const action = {};
    deepFreeze(action);

    const msg = 'operands with empty state returns []';
    const actual = operands(undefined, action);
    const expected = [];
    t.deepEqual(actual, expected, msg);
  }
  {
    const stateBefore = ['a', 'b'];
    const action = {
      type: OPERAND_APPEND,
      payload: 'c',
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'operands appends to the last item in the array';
    const actual = operands(stateBefore, action);
    const expected = ['a', 'bc'];
    t.deepEqual(actual, expected, msg);
  }
  {
    const stateBefore = [];
    const action = {
      type: OPERAND_ADD,
      payload: 'learn redux',
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'operands adds an item to array';
    const actual = operands(stateBefore, action);
    const expected = ['learn redux'];
    t.deepEqual(actual, expected, msg);
  }
  {
    const stateBefore = ['a', 'bc'];
    const action = {
      type: OPERAND_CLEAR,
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'operands clears the array';
    const actual = operands(stateBefore, action);
    const expected = [];
    t.deepEqual(actual, expected, msg);
  }
  t.end();
});
