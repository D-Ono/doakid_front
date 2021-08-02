import React from 'react';

import { InputBlock } from './style';

function Input({ name, placeholder, value, ...rest }) {
  return(
    <InputBlock>
      <input placeholder={placeholder} name={name} value={value} {...rest} />
    </InputBlock>
  );
}

export default Input;