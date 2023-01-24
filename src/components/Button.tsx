import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return <button className={clsx(styles.button, className)} {...props} />;
}
