import styles from "./Header.module.scss";

import todoLogo from '../assets/logo.svg'

export function Header() {
  return <header className={styles.header}>
    <img src={todoLogo} alt="Logotipo TodoList" />
  </header>;
}
