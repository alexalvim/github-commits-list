import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';
import Typo from '../../typo'

const ContentWrapper = styled.div`
  background-color: ${Colors.darkGray};
  padding: ${Spaces.double} 0;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: ${Spaces.containerMaxWidth};
  padding: 0 ${Spaces.double};
`;

const Logo = styled.img`
  height: 40px;
  margin-right: ${Spaces.double}
  width: 40px;
`;

const autocompleteInputStyle = {
  style: {
    display: 'flex',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: Typo.medium,
    height: '30px',
    maxWidth: '300px',
    padding: Spaces.half,
    width: '100%',
  }
}

const autocompleteWrapperStyle = {
  width: '100%'
}

export {
  ContentWrapper,
  Container,
  Logo,
  autocompleteInputStyle,
  autocompleteWrapperStyle
}