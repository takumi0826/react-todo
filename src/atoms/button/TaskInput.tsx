import React, { useState } from 'react';

type Props = {
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  addTask: (text: string) => void;
};

const TaskInput = (props: Props) => {
  const { handleEnter, addTask } = props;
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(text);

    if (!e.currentTarget.value.trim()) return;
    setText(e.currentTarget.value);
  };
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
