import React from 'react';

import { Input } from './styles'

export default ({ value, onChange, placeholder, wrapperStyle }) => (
  <Input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    wrapperStyle={wrapperStyle}/>
)