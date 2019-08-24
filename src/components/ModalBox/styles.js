import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';

const OverlayWrapper = styled.div`
  align-items: center;
  background-color: ${Colors.overlayColor}
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const contentBoxWrapperStyle = `
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: ${Spaces.mobileBreakpoint}) {
    max-height: 550px;
    max-width: 450px;
  }
`

export {
  OverlayWrapper,
  contentBoxWrapperStyle
}