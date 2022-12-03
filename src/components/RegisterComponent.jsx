import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const registerOnClick = () => {
    if (password == verifyPassword) {
      registerWithEmail();
    } else {
      console.log("Password doesn't match.");
    }
  };

  const registerWithEmail = async () => {
    try {
      const tmpUser = await createUserWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      await setDoc(doc(db, "users", username), {
        username: username,
        email_address: emailAddress,
        name: name,
        country: country,
      });
      navigate(`/profile/${tmpUser.user.uid}`);
    } catch (error) {
      setErrorCode(error.message);
      console.log(errorCode);
    }
  };

  return (
    <div className="sign-form-section">
      <div className="sign-form-container">
        <div className="sign-form">
          <h3>Register</h3>

          <input
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Name@email.com"
            onChange={(event) => {
              setEmailAddress(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Verify password"
            onChange={(event) => {
              setVerifyPassword(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="What's your name?"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Country"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />

          <button id="sign-btn">Sign me up!</button>
          <Link to="/login">Already in the game?</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
