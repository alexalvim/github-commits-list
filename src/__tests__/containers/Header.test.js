import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../containers/Header';

describe('Testing Header', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Header searchedUsers={[]} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing Header handle functions', () => {
  it('should change the state value and call searchUserRequest when call handleChangeUserField with value largest than zero', () => {
    const mockedEvt = {
      currentTarget: {
        value: 'foo',
      },
    };
    const mockFunction = jest.fn()
    const wrapper = shallow(
      <Header searchUserRequest={mockFunction} searchedUsers={[]} />
    );
    expect(wrapper.instance().state.userField).toEqual('');
    wrapper.instance().handleChangeUserField(mockedEvt);
    expect(wrapper.instance().state.userField).toEqual('foo');
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should change the state value and dont call searchUserRequest when call handleChangeUserField with value smaller or equal to zero', () => {
    const mockedEvt = {
      currentTarget: {
        value: '',
      },
    };
    const mockFunction = jest.fn()
    const wrapper = shallow(
      <Header searchUserRequest={mockFunction} searchedUsers={[]} />
    );
    wrapper.instance().state.userField = 'foo';

    wrapper.instance().handleChangeUserField(mockedEvt);
    expect(wrapper.instance().state.userField).toEqual('');
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });

  it('should change the state value and call getUserRepositoriesRequest and getUserRequest when call handleOnClickUserListItem', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(
      <Header
        getUserRequest={mockFunction}
        getUserRepositoriesRequest={mockFunction}
        searchedUsers={[]} />
    );
    wrapper.instance().state.userField = 'foo';

    wrapper.instance().handleOnClickUserListItem();
    expect(wrapper.instance().state.userField).toEqual('');
    expect(mockFunction).toHaveBeenCalledTimes(2);
  });
});