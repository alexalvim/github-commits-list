import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'

import ModalBox from '../../components/ModalBox';
import { CloseButton } from '../../components/ModalBox/styles';

describe('Testing ModalBox', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ModalBox title='test' isOpen={true} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with children', () => {
    const wrapper = shallow(
      <ModalBox title='test' isOpen={true}>
        <div id='children'>Children</div>
      </ModalBox>
    );

    expect(wrapper.find('#children').length).toEqual(1);
  })

  it('calls close modal function on click in the close button', () => {
    const mockFunction = jest.fn();
    const wrapper = mount(<ModalBox title='test' isOpen={true} closeModal={mockFunction} />);

    wrapper.find(CloseButton).simulate('click')
    expect(mockFunction).toHaveBeenCalled();
  })
});