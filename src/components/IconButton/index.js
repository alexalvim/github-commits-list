import React from 'react';

import { Button } from './styles';

export default ({ Icon, onClick }) => (
  <Button onClick={onClick}>
    <Icon
      size={24}/>
  </Button>
)