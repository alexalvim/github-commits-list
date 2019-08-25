import styled from 'styled-components';

import Spaces from '../../spaces';

const CommitsList = styled.ul`
  padding-right: ${Spaces.base};

  > li {
    word-break: break-all;
  }
`;

const CommitsListWrapper= styled.div`
  margin-top: ${Spaces.base};
  overflow: auto;
`;

const CommitsForm = styled.form`
  display: flex;
  margin-bottom: ${Spaces.base};
`;

const commitTextFieldStyle = `
  margin-right: ${Spaces.half};
  width: 100%;
`;

const clearFilterButtonStyle = `
  align-self: center;
  margin-bottom: ${Spaces.base};
`;

export {
  CommitsList,
  CommitsListWrapper,
  CommitsForm,
  commitTextFieldStyle,
  clearFilterButtonStyle
}