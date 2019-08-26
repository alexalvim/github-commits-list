import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'

import TextField from '../../components/TextField';
import { Input } from '../../components/TextField/styles';

describe('Testing TextField', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<TextField value='' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('call expected function', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<TextField value='' onChange={mockFunction} />);

    wrapper.simulate('change', {target: {value: 'a'}});
    expect(mockFunction).toHaveBeenCalled();    
  }) 

 it('verify if the wrapperStyle passed works in Input', () => {
    const wrapper = mount(<TextField value='' onChange={() => ({})} wrapperStyle='background: red;' />);

    expect(wrapper.find(Input)).toHaveStyleRule('background', 'red')
  })
});