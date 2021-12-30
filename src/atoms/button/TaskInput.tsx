import React, { ChangeEventHandler, useState } from 'react';

type Props = {
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTask: (text: string) => void;
  text: string;
};

const TaskInput = (props: Props) => {
  const { handleEnter, addTask, handleChange, text } = props;
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
      <button onClick={() => addTask(text)}>追加</button>
    </>
  );
};

export default TaskInput;
