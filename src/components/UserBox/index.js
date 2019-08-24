import React from 'react';

import { ContentWrapper, Image, Title } from './styles';

export default ({ avatarUrl, login }) => (
  <ContentWrapper>
    <Image src={avatarUrl}/>
    <Title>{login}</Title>
  </ContentWrapper>
)