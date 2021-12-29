import React from 'react';

const Button = (props: { children: React.ReactElement }) => {
  const { children } = props;
  return <button>{children}</button>;
};

export default Button;
