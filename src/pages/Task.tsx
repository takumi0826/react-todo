import TaskInput from 'atoms/button/TaskInput';
import TaskTitle from 'atoms/button/TaskTitle';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import CompleteTask from 'molecules/CompleteTask';
import DoTask from 'molecules/DoTask';
import { TodoProvider } from 'providers/TodoProvider';
import React, { useEffect, useState } from 'react';
import { DoneTask, TaskInfo } from 'types/TaskType';

const url = `http://localhost:8080/api`;

const Task = () => {
  const [todos, setTodos] = useState<TaskInfo[] | null>([]);
  const [text, setText] = useState("");
  useEffect(() => {
    void getTask();
  }, []);

  const getTask = async () => {
    const taskUrl = `${url}/get-task`;
    await axios
      .get(taskUrl)
      .then((res: AxiosResponse<TaskInfo[] | null>) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDone = async (task: DoneTask) => {
    const taskUrl = `${url}/done-task`;
    await axios
      .put(taskUrl, task)
      .then((res) => {
        if (res.data === 1) {
          void getTask();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTask = async (id: number) => {
    const taskUrl = `${url}/delete-task/${id}`;
    await axios
      .delete(taskUrl)
      .then((res) => {
        if (res.data === 1) {
          void getTask();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    void (await addTask(e.currentTarget.value));
  };

  const addTask = async (text: string) => {
    // console.log("clicked!");
    if (!text.trim()) return;
    const taskUrl = `${url}/insert-task`;
    await axios
      .post(taskUrl, { title: text })
      .then((res) => {
        if (res.data === 1) {
          void getTask();
          setText("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value.trim()) return;
    setText(e.currentTarget.value);
  };

  return (
    <TodoProvider>
      <div className="">
        <TaskInput
          handleEnter={handleEnter}
          addTask={addTask}
          handleChange={handleChange}
          text={text}
        />
        <TaskTitle>未完了</TaskTitle>
        {todos?.map((todo) => {
          return (
            <>
              <DoTask key={todo.id} todo={todo} handleDone={handleDone} />
            </>
          );
        })}
        <TaskTitle>完了</TaskTitle>
        {todos?.map((todo) => {
          return (
            <>
              <CompleteTask
                key={todo.id}
                todo={todo}
                handleDone={handleDone}
                deleteTask={deleteTask}
              />
            </>
          );
        })}
      </div>
    </TodoProvider>
  );
};

export default Task;
