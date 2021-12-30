export type TaskInfo = {
  id: number;
  title: string;
  done: boolean;
};

export type DoneTask = Omit<TaskInfo, "title">;
