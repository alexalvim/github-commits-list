import React from 'react';
import { shallow } from 'enzyme';

import UserBox from '../../components/UserBox';

describe('Testing UserBox', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<UserBox avatarUrl='avatarTest' login='test' />);

    expect(wrapper).toMatchSnapshot();
  });
});