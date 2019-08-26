import React from 'react';
import { shallow } from 'enzyme';
import { IoMdSearch } from 'react-icons/io'

import IconButton from '../../components/IconButton';

describe('Testing IconButton', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<IconButton Icon={IoMdSearch} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('call expected function', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<IconButton Icon={IoMdSearch} onClick={mockFunction} />);

    wrapper.simulate('click');
    expect(mockFunction).toHaveBeenCalled();    
  })
});