import styled from 'styled-components';

import Spaces from '../../spaces';
import Typo from '../../typo';
import Colors from '../../colors';

const ContentWrapper = styled.div`
  align-items: center;
  background-color: ${Colors.lightestColor};
  color: ${Colors.darkestColor};
  cursor: pointer;
  display: flex;
  padding: ${Spaces.base};

  &:hover {
    background-color: ${Colors.mainColor};
    color: ${Colors.lightestColor};
  }
`;

const Title = styled.h3`
  font-size: ${Typo.medium};
`;

const Image = styled.img`
  border-radius: 50%;
  height: 40px;
  margin-right: ${Spaces.double};
  width: 40px;
`;

export {
  ContentWrapper,
  Title,
  Image
}