import { Header } from "./components/Header";
import { Input } from "./components/Input";
import styles from "./App.module.scss";
import { Button } from "./components/Button";
import { Plus, PlusCircle } from "phosphor-react";
import { useState } from "react";
import { Tasks } from "./components/Tasks";

function App() {
  const [task, setTask] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!task.trim()) return;

    console.log(task);

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
