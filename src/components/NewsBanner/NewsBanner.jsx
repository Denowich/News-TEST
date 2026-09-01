import { Image } from '../Image/Image';
import styles from './styles.module.css';

export const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>NewsTitle</h3>
      <p className={styles.author}>by author</p>
    </div>
  );
};
