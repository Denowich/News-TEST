import { NewsBanner } from '../../NewsBanner/NewsBanner';
import styles from './styles.module.css';

export const Main = () => {
  return (
    <main className={styles.main}>
      <h2>Main</h2>
      <NewsBanner />
    </main>
  );
};
