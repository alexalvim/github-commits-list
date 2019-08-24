import React from 'react';

import { ContentWrapper, Title, TitleContainer, RightContentContainer } from './styles';

export default ({ title, wrapperStyles, rightContent, children }) => (
  <ContentWrapper wrapperStyles={wrapperStyles}>
    <TitleContainer>
      <Title>{title}</Title>
      {rightContent && <RightContentContainer>{rightContent}</RightContentContainer>}
    </TitleContainer>
    {children}
  </ContentWrapper>
)