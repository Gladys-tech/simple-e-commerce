import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Footer from './Footer';
// import Header from './Header';
import {useState} from 'react'

function Layout({children}) {
  const [active, setActive] = useState("home");
  return (
      <>
      <Nav setActive={setActive} active={active}/>
    <div className={styles.container}>
        <main className={styles.main}>
            {/* <Header/> */}
           {children}
        </main>
      
    </div>
    <Footer/>
    </>
  )
}

export default Layout
