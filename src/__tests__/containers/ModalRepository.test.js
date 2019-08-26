import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'

import { ModalRepository } from '../../containers/ModalRepository';

const repository = {
  name: 'repositoryNameTest',
  commitsPage: 2
}

const user = {
  login: 'loginTest'
}

describe('Testing ModalRepository', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ModalRepository user={user} repository={repository} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing ModalRepository handle functions', () => {
  it('should change the state value and call searchCommitRequest when call handleSubmitCommitSearch with value largest than zero', () => {
    const mockedEvt = {
      preventDefault: () => ({})
    };
    const mockFunction = jest.fn()
    const wrapper = shallow(<ModalRepository user={user} repository={repository} searchCommitRequest={mockFunction} />);

    wrapper.instance().state.showClearFilter = false;
    wrapper.instance().state.commitSearchField = 'test';
    wrapper.instance().handleSubmitCommitSearch(mockedEvt);
    expect(wrapper.instance().state.showClearFilter).toEqual(true);
    expect(mockFunction).toHaveBeenCalled();
  });

  it('shouldnt change the state value and dont call searchCommitRequest when call handleSubmitCommitSearch with value equal than zero', () => {
    const mockedEvt = {
      preventDefault: () => ({})
    };
    const mockFunction = jest.fn()
    const wrapper = shallow(<ModalRepository user={user} repository={repository} searchCommitRequest={mockFunction} />);

    wrapper.instance().state.showClearFilter = false;
    wrapper.instance().state.commitSearchField = '';
    wrapper.instance().handleSubmitCommitSearch(mockedEvt);
    expect(wrapper.instance().state.showClearFilter).toEqual(false);
    expect(mockFunction).toHaveBeenCalledTimes(0);
  });

  it('should change the state values and call clearRepository and closeModal when call handleCloseModal', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(
      <ModalRepository
        user={user}
        repository={repository}
        closeModal={mockFunction}
        clearRepository={mockFunction} />
    );

    wrapper.instance().state.showClearFilter = true;
    wrapper.instance().state.commitSearchField = 'test';
    wrapper.instance().handleCloseModal();
    expect(wrapper.instance().state.showClearFilter).toEqual(false);
    expect(wrapper.instance().state.commitSearchField).toEqual('');
    expect(mockFunction).toHaveBeenCalledTimes(2);
  });

  it('should change the state value when call handleChangeCommitSearchField', () => {
    const mockedEvt = {
      currentTarget: {
        value: 'foo'
      }
    };
    const wrapper = shallow(<ModalRepository user={user} repository={repository} />);

    wrapper.instance().state.commitSearchField = 'bar';
    wrapper.instance().handleChangeCommitSearchField(mockedEvt);
    expect(wrapper.instance().state.commitSearchField).toEqual('foo');
  });

  it('should change the state values and call getRepositoryCommitsRequest when call handleClearCommitFilters', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(
     <ModalRepository
      user={user}
      repository={repository}
      getRepositoryCommitsRequest={mockFunction} />
    );

    wrapper.instance().state.showClearFilter = true;
    wrapper.instance().state.commitSearchField = 'test';
    wrapper.instance().handleClearCommitFilters();
    expect(wrapper.instance().state.showClearFilter).toEqual(false);
    expect(wrapper.instance().state.commitSearchField).toEqual('');
    expect(mockFunction).toHaveBeenCalledWith('loginTest', 'repositoryNameTest', 1);
  });

  it('should call getRepositoryCommitsRequest when call handleSeeMoreCommits', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(
     <ModalRepository
      user={user}
      repository={repository}
      getRepositoryCommitsRequest={mockFunction} />
    );

    wrapper.instance().handleSeeMoreCommits();
    expect(mockFunction).toHaveBeenCalledWith('loginTest', 'repositoryNameTest', repository.commitsPage + 1);
  });
});