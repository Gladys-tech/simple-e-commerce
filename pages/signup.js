import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

import { useRouter } from "next/router";
import Link from "next/link";

const  Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  function handleSignUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Your are registered");
        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(
          "Make password more than 6 characters and format email properly"
        );
        // ..
      });
  }

  return (
    <div >
      <h2 >
        Firebase 9 authentication <br /> SignUp Page
      </h2>
      <form onSubmit={handleSignUp}>
        {error && (
          <p >{error}</p>
        )}
        <div >
          <label >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="E-mail"
            
          />
        </div>
        <div >
          <label >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            
          />
        </div>
        <input
          type="submit"
          
        />
        <p >
          Already have an account{" "}
          <Link href="/">
            <a >sign In</a>
          </Link>
        </p>
      </form>
    </div>
  );
}
export default Signup