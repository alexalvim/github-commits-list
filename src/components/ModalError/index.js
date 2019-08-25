import React from 'react';

import ModalBox from '../ModalBox';
import { ErrorIcon, TitleWrapper, ErrorMessage } from './styles';

export default ({ errorMessage, isOpen, closeModal }) => (
  <ModalBox
    title={
      <TitleWrapper>
        <ErrorIcon/> Erro
      </TitleWrapper>}
    isOpen={isOpen}
    closeModal={closeModal}>
    <ErrorMessage>
      {errorMessage}
    </ErrorMessage>
  </ModalBox>
)