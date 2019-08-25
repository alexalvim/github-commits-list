import styled from 'styled-components';

import Colors from '../../colors';
import Typo from '../../typo';

const Button = styled.button`
  background: none;
  border: none;
  color: ${Colors.mainColor};
  cursor: pointer;
  font-size: ${Typo.medium};

  ${(props) => props.wrapperStyle}
`;

export {
  Button
};