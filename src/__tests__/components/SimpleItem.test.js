import React from 'react';
import { shallow } from 'enzyme';

import SimpleItem from '../../components/SimpleItem';
import { Title, Description } from '../../components/SimpleItem/styles';

describe('Testing SimpleItem', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SimpleItem title='test' description='desc' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly without description', () => {
    const wrapper = shallow(<SimpleItem title='test' />);

    expect(wrapper.find(Description).length).toEqual(0);
  });

  it('call expected function', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<SimpleItem title='test' onClick={mockFunction} />);

    wrapper.find(Title).simulate('click');
    expect(mockFunction).toHaveBeenCalled();    
  })
});