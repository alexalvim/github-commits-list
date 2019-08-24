import React from 'react';

import { ContentWrapper, Title } from './styles';

export default ({ title, wrapperStyles, children }) => (
  <ContentWrapper wrapperStyles={wrapperStyles}>
    <Title>{title}</Title>
    {children}
  </ContentWrapper>
)