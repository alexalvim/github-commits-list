import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';
import Typo from '../../typo';

const ContentWrapper = styled.div`
  background-color: ${Colors.lightestColor};
  border: solid 1px ${Colors.lightGray};
  border-radius: 5px;
  padding: ${Spaces.double}
  width: 100%;

  ${(props) => props.wrapperStyles}
`;

const Title = styled.h2`
  color: ${Colors.darkestColor};
  font-size: ${Typo.large};
`;

const TitleContainer = styled.div`
  align-items: center;
  display:flex;
  margin-bottom: ${Spaces.base};
`;

const RightContentContainer = styled.div`
  margin-left: auto;
`;

export {
  ContentWrapper,
  Title,
  TitleContainer,
  RightContentContainer
}