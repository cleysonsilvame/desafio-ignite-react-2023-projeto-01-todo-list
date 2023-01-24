
import styles from "./EmptyTasks.module.scss";

import clipboardSrc from '../assets/clipboard.svg';

export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <img src={clipboardSrc} alt="" />
      <div>
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
