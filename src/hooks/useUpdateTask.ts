import axios from 'axios';
import { TASK_URI } from 'constant/TaskConst';
import { useNavigate } from 'react-router-dom';
import { TaskInfo } from 'types/TaskType';

export const useUpdateTask = () => {
  const navigate = useNavigate();

  const updateTask = async (text: string, todo: TaskInfo) => {
    if (!text.trim()) {
      void deleteTask(todo.id);
    }
    const taskUrl = `${TASK_URI}/update-task`;
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
    const taskUrl = `${TASK_URI}/delete-task/${id}`;
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

  return { updateTask };
};
