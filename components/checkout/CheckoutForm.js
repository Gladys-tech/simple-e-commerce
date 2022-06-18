import React, { useState } from 'react'
import { db } from '../../config/firebaseConfig';
import {collection, addDoc} from "firebase/firestore";

const CheckoutForm = () => {

    const todoCollectionRef = collection(db, "todo");

  const[newName, setNewName] =useState("")
  const[newEmail, setNewEmail] =useState("")
  const[newPhone, setNewPhone] =useState("")
  const[newCountry, setNewCountry] =useState("")
  const[newCity, setNewCity] =useState("")
  const createOrder =async () =>{
     await addDoc(todoCollectionRef,{name: newName, email: newEmail, phone:newPhone, country:newCountry, city:newCity});
     alert("order created wait for 2 days. cash on delivery"); 
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputs)
  //postData(inputs)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='name' onChange={(event)=>{setNewName(event.target.value);}}/>
      <input type="email" placeholder='email' onChange={(event)=>{setNewEmail(event.target.value);}}/>
      <input type="number" placeholder='phone' onChange={(event)=>{setNewPhone(event.target.value);}}/>
      <input type="text" placeholder='country' onChange={(event)=>{setNewCountry(event.target.value);}}/>
      <input type="text" placeholder='city' onChange={(event)=>{setNewCity(event.target.value);}}/>
      <button type='submit' onClick={createOrder}>Create order</button>
      </form>
    </div>
  )
}

export default CheckoutForm
