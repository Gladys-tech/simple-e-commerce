import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import {useState} from 'react'

const HomePage = () => {
  const [active, setActive] = useState("home");
  return (
    <>
    <Head>
      <title>Edu-Mart</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Head>
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="men's clothing" />
        <CategoryCard image="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" name="women's clothing" />
        <CategoryCard image="https://imgur.com/Dm212HS.png" name="electronics" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://imgur.com/qb6IW1f.png" name="jewelery" />
        <CategoryCard
          image="https://imgur.com/HsUfuRU.png"
          name="Accessories"
        />
      </div>
    </main>
    </>
  );
};

export default HomePage;