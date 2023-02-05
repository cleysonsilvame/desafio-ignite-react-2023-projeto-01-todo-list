import trashIcon from "../assets/trash.svg";
import styles from "./CardTask.module.scss";
import { CheckIcon } from "./CheckIcon";

interface CardTask {
  title: string;
  isDone: boolean;
  onChange: () => void;
  onRemoveTask: () => void;
}

export function CardTask({ title, isDone, onChange, onRemoveTask }: CardTask) {
  return (
    <label className={styles.container}>
      <span>
        <input type="checkbox" defaultChecked={isDone} onChange={onChange} />
        <CheckIcon checked={isDone} />
      </span>
      <p className={isDone ? styles.disabledText : ""}>{title}</p>
      <img
        src={trashIcon}
        alt="Lixeira com tampa, representando a remoção de uma tarefa"
        onClick={onRemoveTask}
      />
    </label>
  );
}
