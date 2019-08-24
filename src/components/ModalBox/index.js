import React from 'react';
import { IoIosClose } from 'react-icons/io';

import ContentBox from '../ContentBox';
import {
  OverlayWrapper,
  CloseButton,
  contentBoxWrapperStyle
} from './styles';

export default ({ title, isOpen, closeModal, children }) => (
  isOpen &&
    <OverlayWrapper>
      <ContentBox
        wrapperStyles={contentBoxWrapperStyle}
        rightContent={
          <CloseButton onClick={closeModal}>
            <IoIosClose size={32}/>
          </CloseButton>
        }
        title={title}>
          {children}
      </ContentBox>
    </OverlayWrapper>
);