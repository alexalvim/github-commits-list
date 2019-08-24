import styled from 'styled-components';

import Colors from '../../colors';
import Typo from '../../typo';
import Spaces from '../../spaces';

const Title = styled.h3`
  color: ${Colors.mainColor};
  cursor: pointer;
  font-size: ${Typo.medium};
  font-weight: bold;
  margin-bottom: ${Spaces.half};

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  font-size: ${Typo.medium};
`;

const ContentWrapper = styled.div`
  padding: ${Spaces.double} 0;
`;

export {
  Title,
  Description,
  ContentWrapper
}