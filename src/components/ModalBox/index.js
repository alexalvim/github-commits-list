import React from 'react';

import ContentBox from '../ContentBox';
import {
  OverlayWrapper,
  contentBoxWrapperStyle
} from './styles';

export default ({ title, isOpen, closeModal, children }) => (
  isOpen &&
    <OverlayWrapper>
      <ContentBox
        wrapperStyles={contentBoxWrapperStyle}
        title={title}>
          {children}
      </ContentBox>
    </OverlayWrapper>
);