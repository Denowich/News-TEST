import { useEffect, useState } from 'react';
import { NewsBanner } from '../../NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../../api/apiNews';

export const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      <NewsBanner item={news[0]} />
    </main>
  );
};
