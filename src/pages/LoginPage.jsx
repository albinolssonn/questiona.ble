import React from "react";
import LoginComponent from "../components/LoginComponent";
import SignedInNavbar from "../navigation/SignedInNavbar";

const LoginPage = () => {
  return (
    <div className="page">
      <SignedInNavbar />
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
