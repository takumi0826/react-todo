import React, { ReactNode } from 'react';

const Button = (props: { children: ReactNode }) => {
  const { children } = props;
  return <button>{children}</button>;
};

export default Button;
