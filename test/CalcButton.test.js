import { test } from 'tape';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CalcButton } from '../src/components';

configure({ adapter: new Adapter() });

test('CalcButton component', (t) => {
  const props = {
    modifier: 'foo',
    value: 'bar',
    onClick: () => {},
  };

  {
    const msg = 'render a single button';
    const wrapper = shallow(<CalcButton {...props} />);
    const actual = wrapper.find('button').length;
    const expected = 1;
    t.equal(actual, expected, msg);
  }

  {
    const msg = 'set the className with modifier';
    const wrapper = shallow(<CalcButton {...props} />);
    const actual = wrapper.props().className;
    const expected = 'calc-button calc-button--' + props.modifier;
    t.equal(actual, expected, msg);
  }

  {
    const msg = 'display the value as text';
    const wrapper = shallow(<CalcButton {...props} />);
    const actual = wrapper.children().equals('bar');
    const expected = true;
    t.equal(actual, expected, msg);
  }

  t.end();
});
