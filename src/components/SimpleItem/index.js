import React from 'react';

import { ContentWrapper, Title, Description } from './styles';

export default ({ title, description, onClick }) => (
  <ContentWrapper>
    <Title onClick={onClick}>{title}</Title>
    {description && <Description>{description}</Description>}
  </ContentWrapper>
);