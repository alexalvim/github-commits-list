import React from 'react';

import { Button } from './styles';

export default ({ label, onClick, wrapperStyle }) => (
  <Button
    wrapperStyle={wrapperStyle}
    onClick={onClick}>
    {label}
  </Button>
)