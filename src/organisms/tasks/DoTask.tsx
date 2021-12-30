import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';
import { DoneTask, TaskInfo } from 'types/TaskType';

type Props = {
  todo: TaskInfo;
  handleDone: (task: DoneTask) => void;
};

const DoTask = (props: Props) => {
  const { todo, handleDone } = props;
  return (
    <>
      {!todo.done && (
        <ul>
          <li>
            <p>{todo.title}</p>
            <button onClick={() => handleDone({ id: todo.id, done: true })}>
              完了
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default DoTask;
