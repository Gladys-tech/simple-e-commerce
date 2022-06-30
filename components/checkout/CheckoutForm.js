import React, { useState } from 'react'
import { db } from '../../config/firebaseConfig';
import {collection, addDoc} from "firebase/firestore";
import { useSelector } from 'react-redux';
import  styles from '../../styles/CheckoutForm.module.css'

const CheckoutForm = () => {

  const cart = useSelector((state) => state.cart);

    const todoCollectionRef = collection(db, "order");

  const[newName, setNewName] =useState("")
  const[newEmail, setNewEmail] =useState("")
  const[newPhone, setNewPhone] =useState("")
  const[newCountry, setNewCountry] =useState("")
  const[newCity, setNewCity] =useState("")
  const[newAddress, setAddress] =useState("")

  const createOrder =async () =>{

     {cart.map(async(item) =>(

     await addDoc(todoCollectionRef,{item, name: newName, email: newEmail, phone:newPhone, country:newCountry, city:newCity, address:newAddress})
    ))}
     alert("order created wait for 2 days. cash on delivery"); 
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputs)
  //postData(inputs)
  }
  return (
    <div className={styles.body}>
        <h2>Address Details</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>Name:</label>
      <input className={styles.input} type="text"  onChange={(event)=>{setNewName(event.target.value);}}/>
      
      <label  className={styles.label}>Email:</label>
      <input className={styles.input} type="email"  onChange={(event)=>{setNewEmail(event.target.value);}}/>
      <br></br><br></br>
      <label  className={styles.label}>Contact:</label>
      <input className={styles.input} type="number"  onChange={(event)=>{setNewPhone(event.target.value);}}/>
      
      <label  className={styles.label}>Country:</label>
      <input className={styles.input} type="text" onChange={(event)=>{setNewCountry(event.target.value);}}/>
      <br></br><br></br>
      <label  className={styles.label}>city:</label>
      <input className={styles.input} type="text"  onChange={(event)=>{setNewCity(event.target.value);}}/>
      
      <label  className={styles.label}>Address:</label>
      <input className={styles.input} type="text"  onChange={(event)=>{setAddress(event.target.value);}}/>
      <br></br><br></br>
      <button type='submit' onClick={createOrder}>Create order</button>
      </form>
    </div>
  )
}

export default CheckoutForm
