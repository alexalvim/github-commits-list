import React from 'react';
import { shallow } from 'enzyme';

import ModalBox from '../../components/ModalBox';
import ModalError from '../../components/ModalError';
import { ErrorMessage } from '../../components/ModalError/styles';

describe('Testing ModalError', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ModalError errorMessage='Error' isOpen={true} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show error message', () => {
    const wrapper = shallow(
      <ModalError errorMessage='Error' isOpen={true} />
    );

    expect(wrapper.find(ErrorMessage).length).toEqual(1);
  })

  it('should render component with ModalBox', () => {
    const wrapper = shallow(
      <ModalError errorMessage='Error' isOpen={true} />
    );

    expect(wrapper.find(ModalBox).length).toEqual(1);
  })
});