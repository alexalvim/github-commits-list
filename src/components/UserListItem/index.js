import React from 'react';

import { Title, Image, ContentWrapper } from './styles';

export default class UserListItem extends React.Component {
  render() {
    const { title, imgUrl } = this.props;
    return (
      <ContentWrapper>
        <Image src={imgUrl}/>
        <Title>{title}</Title>
      </ContentWrapper>)
  }
}