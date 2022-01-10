import { useGetOneTask } from 'hooks/useGetOneTask';
import { useUpdateTask } from 'hooks/useUpdateTask';
import { TodoContext } from 'providers/TodoProvider';
import React, { useContext, useEffect, useState } from 'react';

const EditTask = () => {
  const { todo } = useContext(TodoContext);
  const [text, setText] = useState("");
  const { getOneTask } = useGetOneTask();
  const { updateTask } = useUpdateTask();

  useEffect(() => {
    console.log(todo);
    void getOneTask();
  }, []);

  return (
    <div>
      {todo && (
        <>
          <input
            type="text"
            defaultValue={todo.title}
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <button onClick={() => updateTask(text, todo)}>編集する</button>
        </>
      )}
    </div>
  );
};

export default EditTask;
