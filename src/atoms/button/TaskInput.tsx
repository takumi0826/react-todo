import React, { ChangeEventHandler, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};
type Props = {
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTask: (text: string) => void;
  text: string;
};

const TaskInput = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
