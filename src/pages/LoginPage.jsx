import React from "react";
import LoginComponent from "../components/LoginComponent";
import OverlayNavbar from "../navigation/OverlayNavbar";

const LoginPage = () => {
  return (
    <div className="page">
      <OverlayNavbar />
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
