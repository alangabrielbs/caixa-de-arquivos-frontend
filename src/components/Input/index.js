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
  minLength,
  maxLength,
}) {
  return (
    <>
      <Input
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        ref={register({ required, pattern, minLength, maxLength })}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  );
}
