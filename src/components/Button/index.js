import React from 'react';

import { Button } from './styles';

export default function ButtonBase({
  type = 'submit',
  children,
  background = '#8C6FF0',
  color = '#fff',
}) {
  return (
    <Button type={type} background={background} color={color}>
      {children}
    </Button>
  );
}
