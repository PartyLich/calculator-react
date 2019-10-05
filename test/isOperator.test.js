import { test } from 'tape';
import deepFreeze from '../src/lib/deep-freeze';

import { ISOPERATOR_TOGGLE } from '../src/actions';
import { isOperator } from '../src/reducers';

test('isOperator reducer', function (t) {
  {
    const msg = 'isOperator default is true';
    const actual = isOperator(undefined, { type: 'noop' });
    const expected = true;
    t.deepEqual(actual, expected, msg);
  }

  {
    const stateBefore = false;
    const action = {
      type: ISOPERATOR_TOGGLE,
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    const msg = 'isOperator toggles the state';
    const actual = isOperator(stateBefore, action);
    const expected = true;
    t.deepEqual(actual, expected, msg);
  }

  t.end();
});
