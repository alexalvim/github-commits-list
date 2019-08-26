import React from 'react';
import { shallow } from 'enzyme';

import TextButton from '../../components/TextButton';

describe('Testing TextButton', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<TextButton label='test' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('call expected function', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<TextButton label='test' onClick={mockFunction} />);

    wrapper.simulate('click');
    expect(mockFunction).toHaveBeenCalled();    
  })
});