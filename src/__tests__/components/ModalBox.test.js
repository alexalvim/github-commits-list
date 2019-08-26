import React from 'react';
import { shallow } from 'enzyme';

import ModalBox from '../../components/ModalBox';

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
});