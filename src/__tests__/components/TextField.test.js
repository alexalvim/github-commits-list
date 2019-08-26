import React from 'react';
import { shallow, mount } from 'enzyme';

import TextField from '../../components/TextField';

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
});