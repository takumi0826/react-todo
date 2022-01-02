import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router';
import { TaskInfo } from 'types/TaskType';

const url = `http://localhost:8080/api`;

const EditTask = () => {
  const [todo, setTodo] = useState<TaskInfo | null>(null);
  useEffect(() => {
    void getTask();
  }, []);
  const getTask = async () => {
    const id = useParams<{ id: string }>();
    console.log(id);

    const taskUrl = `${url}/one-task?id=${id as string}`;
    await axios
      .get(taskUrl)
      .then((res: AxiosResponse<TaskInfo | null>) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div>{todo && <p>{todo.title}</p>}</div>;
};

export default EditTask;
