import { test } from 'tape';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Calculator } from '../src/components';
import { CalcDisplay, CalcButton } from '../src/components';

configure({ adapter: new Adapter() });

const noop = () => {};

test('Calculator component', (t) => {
  const makeProps = () => ({
    isOperator: true,
    operators: [],
    operands: [],
    display: {
      input: '',
      output: '0',
    },

    clearAll: noop,
    equalClick: noop,
    operandClick: noop,
    operatorClick: noop,
  });

  {
    const props = makeProps();
    const msg = 'should contain a CalcDisplay';
    const wrapper = shallow(<Calculator {...props} />);
    const actual = wrapper.containsMatchingElement(<CalcDisplay />);
    const expected = true;
    t.equal(actual, expected, msg);
  }

  {
    const props = makeProps();
    const msg = 'should contain some CalcButtons';
    const wrapper = shallow(<Calculator {...props} />);
    const actual = wrapper.containsMatchingElement(<CalcButton />);
    const expected = true;
    t.equal(actual, expected, msg);
  }

  {
    let called = false;
    const props = makeProps();
    props.operatorClick = () => () => (called = true);

    const wrapper = shallow(<Calculator {...props} />);
    wrapper.find('CalcButton[value="+"]').simulate('click');
    const msg = 'should call operatorClick';
    const actual = called;
    const expected = true;
    t.equal(actual, expected, msg);
  }

  {
    let called = false;
    const props = makeProps();
    props.operandClick = () => () => (called = true);

    const wrapper = shallow(<Calculator {...props} />);
    wrapper.find('CalcButton[value="0"]').simulate('click');
    const msg = 'should call operandClick';
    const actual = called;
    const expected = true;
    t.equal(actual, expected, msg);
  }

  {
    let called = false;
    const props = makeProps();
    props.clearAll = () => (called = true);

    const wrapper = shallow(<Calculator {...props} />);
    wrapper.find('CalcButton[value="AC"]').simulate('click');
    const msg = 'should call clearAll';
    const actual = called;
    const expected = true;
    t.equal(actual, expected, msg);
  }

  {
    let called = false;
    const props = makeProps();
    props.equalClick = () => () => (called = true);

    const wrapper = shallow(<Calculator {...props} />);
    wrapper.find('CalcButton[value="="]').simulate('click');
    const msg = 'should call equalClick';
    const actual = called;
    const expected = true;
    t.equal(actual, expected, msg);
  }

  t.end();
});
