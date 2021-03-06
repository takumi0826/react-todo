import TaskTitle from 'atoms/button/TaskTitle';
import React from 'react';
import { DoneTask, TaskInfo } from 'types/TaskType';

type Props = {
  key: number;
  todo: TaskInfo;
  handleDone: (task: DoneTask) => void;
  deleteTask: (id: number) => void;
};

const CompleteTask = (props: Props) => {
  const { key, todo, handleDone, deleteTask } = props;
  return (
    <>
      {todo.done && (
        <ul>
          <li key={key}>
            <p>{todo.title}</p>
            <button onClick={() => handleDone({ id: todo.id, done: false })}>
              戻す
            </button>
            <button onClick={() => deleteTask(todo.id)}>削除</button>
          </li>
        </ul>
      )}
    </>
  );
};

export default CompleteTask;
