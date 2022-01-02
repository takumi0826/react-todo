import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { TaskInfo } from 'types/TaskType';

const url = `http://localhost:8080/api`;

const EditTask = () => {
  const [todo, setTodo] = useState<TaskInfo | null>(null);
  const [text, setText] = useState("");
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const navigate = useNavigate();

  useEffect(() => {
    void getOneTask();
  }, []);
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

  const updateTask = async (todo: TaskInfo) => {
    if (!text.trim()) {
      void deleteTask(todo.id);
    }
    const taskUrl = `${url}/update-task`;
    todo.title = text;
    await axios
      .put(taskUrl, todo)
      .then((res) => {
        if (res.data === 1) {
          navigate("/task");
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
          navigate("/task");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {todo && (
        <>
          <input
            type="text"
            defaultValue={todo.title}
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <button onClick={() => updateTask(todo)}>編集する</button>
        </>
      )}
    </div>
  );
};

export default EditTask;
