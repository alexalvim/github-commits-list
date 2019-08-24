import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';

const Container = styled.div`
  margin: 0 auto;
  max-width: ${Spaces.containerMaxWidth};
  padding: ${Spaces.double};
`;

const ContentHolder = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  @media (min-width: ${Spaces.tabletBreakpoint}) {
    flex-direction: row;
  }
`;

const RepositoriesList = styled.ul`
  > li {
    border-bottom: solid 1px ${Colors.lightGray};

    &:last-child {
      border: none;
    }
  }
`;

const CommitsList = styled.ul`
  overflow: auto;
  padding-right: ${Spaces.base};

  > li {
    word-break: break-all;
  }
`;

const contentBoxWrapperStyle = `
  margin-top: ${Spaces.double};

  @media (min-width: ${Spaces.tabletBreakpoint}) {
    margin-left: ${Spaces.double};
    margin-top: 0;
  }
`;

export {
  Container,
  ContentHolder,
  RepositoriesList,
  CommitsList,
  contentBoxWrapperStyle
}