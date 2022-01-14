import React from 'react';
import { Link } from 'react-router-dom';
import { DoneTask, TaskInfo } from 'types/TaskType';

type Props = {
  key: number;
  todo: TaskInfo;
  handleDone: (task: DoneTask) => void;
};

const DoTask = (props: Props) => {
  const { key, todo, handleDone } = props;
  return (
    <>
      {!todo.done && (
        <ul>
          <li key={key}>
            <p>{todo.title}</p>
            <Link to={`/edit?id=${todo.id}`}>編集</Link>
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
