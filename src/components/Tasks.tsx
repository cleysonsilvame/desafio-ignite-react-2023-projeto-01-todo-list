import { EmptyTasks } from "./EmptyTasks";
import { Label } from "./Label";
import styles from "./Tasks.module.scss";

export function Tasks() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Label title="Tarefas criadas" variant="blue" amount={"0"} />
        <Label title="Concluídas" variant="purple" amount={"0 de 0"} />
      </div>

      <EmptyTasks />
    </main>
  );
}
