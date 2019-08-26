import React from 'react';
import { shallow } from 'enzyme';

import UserListItem from '../../components/UserListItem';

describe('Testing UserListItem', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<UserListItem title='test' imgUrl='img' />);

    expect(wrapper).toMatchSnapshot();
  });
});