import React from 'react'
import navStyles from '../styles/Nav.module.css'
import { useSelector } from 'react-redux';
import Link from 'next/link'
import Head from 'next/head';
import { auth } from '../config/firebaseConfig';
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";


function Nav() {

  const router = useRouter();
  const currentRoute = router.pathname;

  function handleLogOut(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("you are logged out");
        router.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }


  // const Navbar = () => {
    const cart = useSelector((state) => state.cart);
  
    const getItemsCount = () => {
      return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };
  
  return (
    <>
    <Head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link></Head>

    <div className={navStyles.main}>
    <nav className='shadow-lg p-3 mb-5 bg-body rounded'>
      <ul className=' d-flex justify-content-center'>
      <li className='mx-5 nav'>
          <Link href="/" >
          <a className={currentRoute ==="/" ? "active" : "non-active"}>
            Edu-Mart
            </a>
          </Link>
          </li>
          <li className='mx-5 nav'>
          <Link href="/home">
          <a className={currentRoute ==="/home" ? "active" : "non-active"}>
            Home
            </a></Link>
          </li>
          <li className='mx-5 nav'>
          <Link href="/shop">
          <a className={currentRoute ==="/shop" ? "active" : "non-active"}>
            Shop
            </a></Link>
          </li>
          <li className='mx-5 nav'>
          <Link href="/login">
          <a className={currentRoute ==="/login" ? "active" : "non-active"}>
            Login
            </a></Link>
          </li>
          <li className='mx-5 nav'>
          <Link href="/signup">
          <a className={currentRoute ==="/signup" ? "active" : "non-active"}>
            SignUp
            </a></Link>
          </li>
          <li className='mx-5 nav'>
            <Link href="/cart"><p className={navStyles.nav}>
            <a className={currentRoute ==="/cart" ? "active" : "non-active"}>
              cart  ({getItemsCount()})</a></p>
              </Link>
          </li>
      </ul>

      <style jsx>
        {`
        nav a {
          text-decoration:none;
          padding:10px;
          height:100%;
        }
        .active{
          background:purple;
          color:white;
          border-radius:5px;
        }`}
      </style>

      <form onSubmit={handleLogOut}>
          <button>
            Logout
          </button>
        </form>
    </nav>
    </div>
    </>
  )
}

export default Nav
