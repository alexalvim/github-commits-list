import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';

const Button = styled.button`
  background-color: ${Colors.mainColor};
  color: ${Colors.lightestColor};
  cursor: pointer;
  padding: ${Spaces.half} ${Spaces.base};
`;

export {
  Button
};