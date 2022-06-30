import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

import { useRouter } from "next/router";
import Link from "next/link";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("logged In");
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        setError('email or password not correct')
        // ..
      });
  }

  return (
    <div>
      <h2>
        Firebase 9 authentication <br /> LogIn Page
      </h2>

      <form onSubmit={handleLogin}>
      {error && <p>{error}</p>}
        <div>
          <label>
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
          Don't have an account{" "}
          <Link href="/signup">
            <a >sign Up</a>
          </Link>
        </p>
        <p >
          Forgotten password?{" "}
          <Link href="/password">
            <a>Reset Here</a>
          </Link>
        </p>
      </form>
    </div>
  );
}
export default login