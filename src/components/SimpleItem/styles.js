import styled from 'styled-components';

import Colors from '../../colors';
import Typo from '../../typo';
import Spaces from '../../spaces';

const Title = styled.h3`
  color: ${Colors.mainColor};
  font-size: ${Typo.medium};
  font-weight: bold;
  margin-bottom: ${Spaces.half};

  ${(props) => props.onClick &&
    `cursor: pointer;
     &:hover {
       text-decoration: underline;
     }`}
`;

const Description = styled.p`
  font-size: ${Typo.medium};
  word-break: break-all;
`;

const ContentWrapper = styled.div`
  padding: ${Spaces.double} 0;
`;

export {
  Title,
  Description,
  ContentWrapper
}