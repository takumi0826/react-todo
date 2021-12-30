import React, { ReactNode } from 'react';

const TaskTitle = (props: { children: ReactNode }) => {
  const { children } = props;
  return <h2>{children}</h2>;
};

export default TaskTitle;
