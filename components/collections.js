// import React, { useEffect, useState } from 'react'
// import Head from 'next/head'
// import Link from 'next/link'
// import { db } from '../../config/firebaseConfig';
//  import { collection, onSnapshot } from "firebase/firestore";
// // import Collect from '../../components/Collect';
// import collectionStyles from '/styles/collections.module.css' 

// const Products = () => {
//     const [loading, setLoading] = useState(true);
//     const [products,setProducts] = useState([]);

//     useEffect(()=>{
//         const unsub = onSnapshot(
//             collection(db,"products"),
//             (snapshot)=>{
//                 let list = [];
//                 snapshot.docs.forEach((doc)=>{
//                     list.push({id: doc.id, ...doc.data()});
//                 });
//                 setProducts(list);
//             },(error)=>{
//                 console.log(error)
//             }
//         );
//         return()=>{
//             unsub();
//         }
//     },[]);

//     console.log("products", products);
//   return (
//     <div>
//      <Head>
//         <title>Collections</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
//       </Head>
//       <>
//         <Link href="/">Home</Link> /<span>Collections</span>
//       </>
//       {/* <div>
//         <Collect products={products}/>
//       </div> */}
//       <div>
//       {products?.map((item)=>(
//         <div  key={item.id}>
//           <div className={collectionStyles.container}>
//             {/* <p>{item.products}</p> */}
//             <img src={item.imgUrl}/>
//             <p>{item.name}</p>
//             <p>{item.amount}</p>
//             </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   )
// }




// export default Products


// import Head from 'next/head'
// import homeStyles from "../styles/Home.module.css";
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Edu-Mart</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
//       </Head>
//       <div className={homeStyles.home}>
//         <p className={homeStyles.title}>Wear better, look better.</p>
//         <p className={homeStyles.text}>Find your style!</p>
//         <Link href="/collections">Shop Now</Link>
//       </div>
//     </>
//   )
// }


//import Head from 'next/head'
// import homeStyles from "../styles/Home.module.css";
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Edu-Mart</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
//       </Head>
//       <div className={homeStyles.home}>
//         <p className={homeStyles.title}>Wear better, look better.</p>
//         <p className={homeStyles.text}>Find your style!</p>
//         <Link href="/collections">Shop Now</Link>
//       </div>
//     </>
//   )
// }
