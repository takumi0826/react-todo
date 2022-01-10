import React, { createContext, ReactNode, useState } from 'react';
import { TaskInfo } from 'types/TaskType';

export const TodoContext = createContext(
  {} as {
    todo: TaskInfo | null;
    setTodo: React.Dispatch<React.SetStateAction<TaskInfo | null>>;
  }
);

export const TodoProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [todo, setTodo] = useState<TaskInfo | null>(null);
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
