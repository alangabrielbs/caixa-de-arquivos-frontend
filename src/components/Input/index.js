import React from 'react';

import { Input, ErrorMessage } from './styles';

export default function InputBase({
  type = 'text',
  placeholder,
  register,
  required,
  pattern,
  name,
  error,
  autoComplete,
}) {
  return (
    <>
      <Input
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        ref={register({ required, pattern })}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  );
}
