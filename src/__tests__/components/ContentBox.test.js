import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'

import ContentBox from '../../components/ContentBox';
import { ContentWrapper } from '../../components/ContentBox/styles';

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

  it('should render correctly with children', () => {
    const wrapper = mount(<ContentBox title='test' wrapperStyles='background: blue;'/>);

    expect(wrapper.find(ContentWrapper)).toHaveStyleRule('background', 'blue')
  })
});