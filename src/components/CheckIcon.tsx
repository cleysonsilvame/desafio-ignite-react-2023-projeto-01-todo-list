import { Check, Circle } from "phosphor-react";

import styles from "./CheckIcon.module.scss";

interface CheckIconProps {
  checked: boolean;
}

export function CheckIcon({ checked }: CheckIconProps) {
  return (
    <div className={styles.container}>
      {checked ? (
        <Check className={styles.checked} color="#F2F2F2" />
      ) : (
        <span className={styles.unchecked} />
      )}
    </div>
  );
}
