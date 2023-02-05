import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

interface Task {
  id: string;
  title: string;
  done: boolean;
}

type TaskDTO = Omit<Task, "id">;

interface TasksContextData {
  tasks: Task[];
  createNewTask: (task: TaskDTO) => void;
  toggleTask: (taskId: string) => void;
  removeTask: (taskId: string) => void;
}

const TasksContext = createContext({} as TasksContextData);

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function createNewTask(task: TaskDTO) {
    setTasks(state => [
      ...state,
      {
        id: uuid(),
        title: task.title,
        done: task.done,
      },
    ]);
  }

  function toggleTask(id: string) {
    setTasks(state =>
      state.map(task => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }

  function removeTask(id: string) {
    setTasks(state => state.filter(task => task.id !== id));
  }

  return (
    <TasksContext.Provider
      value={{ tasks, createNewTask, toggleTask, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
