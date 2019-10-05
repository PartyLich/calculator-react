import { test } from 'tape';
import deepFreeze from '../src/lib/deep-freeze';

import { OPERATOR_REPLACE, OPERATOR_ADD, OPERATOR_CLEAR } from '../src/actions';
import { operators } from '../src/reducers';

test('operators reducer', function (t) {
  {
    const action = {};
    deepFreeze(action);

    const msg = 'operators with empty state returns []';
    const actual = operators(undefined, action);
    const expected = [];
    t.deepEqual(actual, expected, msg);
  }
  {
    const stateBefore = ['a', 'b'];
    const action = {
      type: OPERATOR_REPLACE,
      payload: 'c',
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'operators replaces the last item in the array';
    const actual = operators(stateBefore, action);
    const expected = ['a', 'c'];
    t.deepEqual(actual, expected, msg);
  }
  {
    const stateBefore = [];
    const action = {
      type: OPERATOR_ADD,
      payload: 'learn redux',
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'operators adds an item to array';
    const actual = operators(stateBefore, action);
    const expected = ['learn redux'];
    t.deepEqual(actual, expected, msg);
  }
  {
    const stateBefore = ['+', '-'];
    const action = {
      type: OPERATOR_CLEAR,
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'operators clears the array';
    const actual = operators(stateBefore, action);
    const expected = [];
    t.deepEqual(actual, expected, msg);
  }
  t.end();
});
