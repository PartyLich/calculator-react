import { test } from 'tape';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CalcDisplay } from '../src/components';

configure({ adapter: new Adapter() });

test('CalcDisplay component', (t) => {
  {
    const msg = 'shallow render no args';
    const wrapper = shallow(<CalcDisplay />);
    const actual = wrapper.equals(
        <div class="calc-display">
          <span class="calc-display__output"></span>
          <span class="calc-display__input"></span>
        </div>
    );
    const expected = true;
    t.equal(actual, expected, msg);
  }

  {
    const props = {
      input: 'foo',
      output: 'bar',
    };
    const msg = 'shallow render with props';
    const wrapper = shallow(<CalcDisplay {...props} />);
    const actual = wrapper.equals(
        <div class="calc-display">
          <span class="calc-display__output">bar</span>
          <span class="calc-display__input">foo</span>
        </div>
    );
    const expected = true;
    t.equal(actual, expected, msg);
  }
  t.end();
});
