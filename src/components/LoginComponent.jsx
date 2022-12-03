import React, { useState } from "react";
import "../stylesheets/SignStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../server/firebase-config";

const LoginComponent = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const navigate = useNavigate();

  const signInWithEmail = async () => {
    try {
      const tmpUser = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate(`/myprofile/${tmpUser.user.uid}`);
    } catch (error) {
      setErrorCode(error.message);
      console.log(errorCode);
    }
  };
  return (
    <div className="sign-form-section">
      <div className="sign-form-container">
        <div className="sign-form">
          <h3>Login</h3>
          <input
            type="text"
            placeholder="Name@email.com"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button onClick={signInWithEmail} id="sign-btn">
            Let me in!
          </button>
          <Link to="/register">No account yet?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
