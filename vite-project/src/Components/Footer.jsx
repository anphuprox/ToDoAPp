import styles from "./Footer.module.css";
export default function Footer({ completedTodos, total }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completes task:{completedTodos}</span>
      <span className={styles.item}>Total todos: {total}</span>
    </div>
  );
}
