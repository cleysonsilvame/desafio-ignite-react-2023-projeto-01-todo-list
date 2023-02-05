import { Plus, PlusCircle } from "phosphor-react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import styles from "./App.module.scss";
import { Button } from "./components/Button";
import { Tasks } from "./components/Tasks";
import { useTasks } from "./contexts/TasksContext";

function App() {
  const [task, setTask] = useState("");

  const { createNewTask } = useTasks();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!task.trim()) return;

    createNewTask({
      title: task,
      done: false,
    });

    setTask("");
  }

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <Button type="submit">
            Criar
            <PlusCircle size={16} />
          </Button>
        </form>

        <Tasks />
      </div>
    </div>
  );
}

export default App;
