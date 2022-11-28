import React from "react";
import "../stylesheets/SignStyles.css";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <div className="sign-form-section">
      <div className="sign-form-container">
        <div className="sign-form">
          <h3>Login</h3>
          <input type="text" placeholder="Name@email.com" />
          <input type="text" placeholder="Password" />
          <button id="sign-btn">Let me in!</button>
          <Link to="/register">No account yet?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
