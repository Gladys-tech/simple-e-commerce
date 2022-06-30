import Head from 'next/head'
import homeStyles from "../styles/Home.module.css";
import Link from 'next/link';


export default function Home() {
  
  
  return (
    <>
      <Head>
        <title>Edu-Mart</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Head>
      
          <div className={homeStyles.home}>
          <p className={homeStyles.title}>Wear better, look better.</p>
          <p className={homeStyles.text}>Find your style!</p>
          <Link href="/home">Shop Now</Link>
          </div>
            
    </>
  )
}
