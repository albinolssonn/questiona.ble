import React from "react";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  return (
    <div className="sign-form-section">
      <div className="sign-form-container">
        <div className="sign-form">
          <h3>Register</h3>

          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Name@email.com" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Verify password" />
          <input type="text" placeholder="What's your name?" />

          <button id="sign-btn">Sign me up!</button>
          <Link to="/login">Already in the game?</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
