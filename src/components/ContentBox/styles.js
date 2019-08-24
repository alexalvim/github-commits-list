import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';
import Typo from '../../typo';

const ContentWrapper = styled.div`
  border: solid 1px ${Colors.lightGray};
  border-radius: 5px;
  padding: ${Spaces.double}
  width: 100%;

  ${(props) => props.wrapperStyles}
`;

const Title = styled.h2`
  color: ${Colors.darkestColor};
  font-size: ${Typo.large};
  margin-bottom: ${Spaces.double};
`;

export {
  ContentWrapper,
  Title
}