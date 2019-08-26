import React from 'react';
import { shallow } from 'enzyme';

import { UserPage } from '../../containers/UserPage';

const user = {
  login: 'loginTest',
  avatarUrl: 'avatarUrlTest',
  repositoriesPage: 1
}

const repository = {
  name: 'repositoryNameTest'
}

describe('Testing UserPage', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<UserPage user={user} repository={repository} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing UserPage handle functions', () => {
  it('should call getUserRepositoriesRequest when call handleSeeMoreRepositories', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <UserPage
        getUserRepositoriesRequest={mockFunction}
        user={user}
        repository={repository} />);

    wrapper.instance().handleSeeMoreRepositories();
    expect(mockFunction).toHaveBeenCalledWith(user.login, user.avatarUrl, user.repositoriesPage + 1);
  });

  it('should change the state value and call getRepositoryCommitsRequest when call handleOnClickRepository', () => {
    const mockFunction = jest.fn()
    const repositoryName = 'name'
    const wrapper = shallow(
      <UserPage
        getRepositoryCommitsRequest={mockFunction}
        user={user}
        repository={repository} />);

    wrapper.instance().state.openRepositoryModal = false;
    wrapper.instance().handleOnClickRepository(repositoryName);
    expect(wrapper.instance().state.openRepositoryModal).toEqual(true);
    expect(mockFunction).toHaveBeenCalledWith(user.login, repositoryName, 1);
  });

  it('should change state value when call handleCloseModalRepository', () => {
    const wrapper = shallow(
      <UserPage
        user={user}
        repository={repository} />);

    wrapper.instance().state.openRepositoryModal = true
    wrapper.instance().handleCloseModalRepository();
    expect(wrapper.instance().state.openRepositoryModal).toEqual(false);
  });

  it('should call clearErrorMessage when call handleCloseModalRepository', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <UserPage
        clearErrorMessage={mockFunction}
        user={user}
        repository={repository} />);

    wrapper.instance().handleCloseModalError();
    expect(mockFunction).toHaveBeenCalled()
  });
});