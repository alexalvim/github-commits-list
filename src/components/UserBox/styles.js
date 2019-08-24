
import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';
import Typo from '../../typo'

const ContentWrapper = styled.div`
  align-items: center;
  background-color: ${Colors.mainColor};
  border-radius: 5px;
  color: ${Colors.lightestColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${Spaces.double};
  width: 100%;

  @media (min-width: ${Spaces.tabletBreakpoint}) {
    width: 300px;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  height: 180px;
  margin-bottom: ${Spaces.double};
  width: 180px;
`;

const Title = styled.h3`
  font-size: ${Typo.large};
`;

export {
  ContentWrapper,
  Image,
  Title
}