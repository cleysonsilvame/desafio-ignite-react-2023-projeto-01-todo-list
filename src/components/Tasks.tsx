import { useTasks } from "../contexts/TasksContext";
import { CardTask } from "./CardTask";
import { EmptyTasks } from "./EmptyTasks";
import { Label } from "./Label";
import styles from "./Tasks.module.scss";

export function Tasks() {
  const { tasks, toggleTask, removeTask } = useTasks();

  const totalOfTasks = tasks.length;
  const totalOfDone = tasks.reduce((acc, task) => (task.done ? ++acc : acc), 0);

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Label title="Tarefas criadas" variant="blue" amount={totalOfTasks} />
        <Label
          title="Concluídas"
          variant="purple"
          amount={totalOfTasks && `${totalOfDone} de ${totalOfTasks}`}
        />
      </div>

      {totalOfTasks ? (
        tasks.map(task => (
          <CardTask
            key={task.id}
            title={task.title}
            isDone={task.done}
            onChange={() => toggleTask(task.id)}
            onRemoveTask={() => removeTask(task.id)}
          />
        ))
      ) : (
        <EmptyTasks />
      )}
    </main>
  );
}
