import { test } from 'tape';
import deepFreeze from '../src/lib/deep-freeze';

import { OUTPUT_SET, OUTPUT_APPEND, OUTPUT_CLEAR } from '../src/actions';
import { output } from '../src/reducers';

test('output reducer', function (t) {
  {
    const stateBefore = '';
    const action = {
      type: OUTPUT_SET,
      payload: 'learn redux',
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'output sets the state';
    const actual = output(stateBefore, action);
    const expected = 'learn redux';
    t.deepEqual(actual, expected, msg);
  }

  {
    const action = {
      type: OUTPUT_SET,
      payload: '42',
    };

    const msg = 'output sets with empty state';
    const actual = output(undefined, action);
    const expected = '42';
    t.deepEqual(actual, expected, msg);
  }

  {
    const stateBefore = 'ab';
    const action = {
      type: OUTPUT_APPEND,
      payload: 'c',
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'output appends to the state';
    const actual = output(stateBefore, action);
    const expected = 'abc';
    t.deepEqual(actual, expected, msg);
  }

  {
    const stateBefore = 'ab';
    const action = {
      type: OUTPUT_CLEAR,
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'output returns initial state';
    const actual = output(stateBefore, action);
    const expected = '0';
    t.deepEqual(actual, expected, msg);
  }

  t.end();
});
