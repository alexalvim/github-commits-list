import React from 'react';
import { shallow } from 'enzyme';

import ContentBox from '../../components/ContentBox';

describe('Testing ContentBox', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ContentBox title='test' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with right content', () => {
    const wrapper = shallow(<ContentBox title='test' rightContent={<div id='test'>Test</div>} />);

    expect(wrapper.find('#test').length).toEqual(1);
  });

  it('should render correctly with children', () => {
    const wrapper = shallow(
      <ContentBox title='test'>
        <div id='children'>Children</div>
      </ContentBox>
    );

    expect(wrapper.find('#children').length).toEqual(1);
  })
});