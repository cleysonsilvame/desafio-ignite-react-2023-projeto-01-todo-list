import clsx from "clsx";
import styles from "./Label.module.scss";

interface LabelProps {
  title: string;
  variant: "blue" | "purple";
  amount: string;
}

export function Label({ title, variant, amount }: LabelProps) {
  return (
    <div className={styles.container}>
      <span className={clsx(styles.label, styles[variant])}>{title}</span>
      <span className={styles.amount}>{amount}</span>
    </div>
  );
}
