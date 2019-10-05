import { test } from 'tape';
import createAction from '../src/lib/createAction';

test('createAction()', (t) => {
  {
    const msg = 'creates a function';
    const actual = typeof createAction('foo');
    const expected = 'function';
    t.deepEqual(actual, expected, msg);
  }
  {
    const msg = 'use identity payload creator as default';
    const actual = createAction('foo')('bar');
    const expected = {
      type: 'foo',
      payload: 'bar',
    };
    t.deepEqual(actual, expected, msg);
  }
  {
    const msg = 'no payload if value undefined';
    const actual = createAction('foo')();
    const expected = {
      type: 'foo',
    };
    t.deepEqual(actual, expected, msg);
  }
  {
    const msg = 'throws if no type provided';
    const expected = /must have a type property$/;
    t.throws(createAction(), expected, msg);
  }
  t.end();
});
