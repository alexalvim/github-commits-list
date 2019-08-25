import styled from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';

import Colors from '../../colors';
import Spaces from '../../spaces';
import Typo from '../../typo';

const ErrorIcon = styled(IoIosCloseCircle)`
  color: ${Colors.errorRed};
  margin-right: ${Spaces.half};
`;

const TitleWrapper = styled.div`
  display:flex;
  justify-content: center;
`;

const ErrorMessage = styled.p`
  color: ${Colors.darkestColor};
  font-size: ${Typo.medium};
`;

export {
  ErrorIcon,
  TitleWrapper,
  ErrorMessage
};