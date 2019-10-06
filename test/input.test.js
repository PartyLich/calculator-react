import { test } from 'tape';
import deepFreeze from '../src/lib/deep-freeze';

import { INPUT_SET, INPUT_APPEND, INPUT_REPLACE } from '../src/actions';
import { input } from '../src/reducers';

test('input reducer', function (t) {
  {
    const stateBefore = '';
    const action = {
      type: INPUT_SET,
      payload: 'learn redux',
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'input sets the state';
    const actual = input(stateBefore, action);
    const expected = 'learn redux';
    t.deepEqual(actual, expected, msg);
  }

  {
    const stateBefore = 'ab';
    const action = {
      type: INPUT_APPEND,
      payload: 'c',
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'input appends to the state';
    const actual = input(stateBefore, action);
    const expected = 'abc';
    t.deepEqual(actual, expected, msg);
  }

  {
    const stateBefore = 'ab';
    const action = {
      type: INPUT_REPLACE,
      payload: 'c',
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'input replaces the last character';
    const actual = input(stateBefore, action);
    const expected = 'ac';
    t.deepEqual(actual, expected, msg);
  }

  {
    const action = {
      type: INPUT_SET,
      payload: 'learn redux',
    };

    const msg = 'input updates with empty state';
    const actual = input(undefined, action);
    const expected = 'learn redux';
    t.deepEqual(actual, expected, msg);
  }

  t.end();
});
