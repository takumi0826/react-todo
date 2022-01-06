import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { TaskInfo } from 'types/TaskType';

export const useGetOneTask = () => {
  const url = `http://localhost:8080/api`;
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const [todo, setTodo] = useState<TaskInfo | null>(null);

  const getOneTask = async () => {
    const id = query.get("id");
    const taskUrl = `${url}/one-task?id=${Number(id)}`;
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

  return { todo, getOneTask };
};
