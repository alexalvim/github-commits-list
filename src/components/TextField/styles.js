import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';
import Typo from '../../typo';

const Input = styled.input`
  background-color: ${Colors.lightestColor};
  color: ${Colors.darkestColor}
  font-size: ${Typo.medium};
  padding: ${Spaces.half};

  ${(props) => props.wrapperStyle}
`;

export {
  Input
};