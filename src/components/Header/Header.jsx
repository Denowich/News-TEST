import styles from './styles.module.css';
import { formatDate } from '../helpers/formatDate';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>NEWS</h2>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
};
