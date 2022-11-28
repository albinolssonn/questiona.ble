import React from "react";
import RegisterComponent from "../components/RegisterComponent";
import OverlayNavbar from "../navigation/OverlayNavbar";

const RegisterPage = () => {
  return (
    <div className="page">
      <OverlayNavbar />
      <RegisterComponent />
    </div>
  );
};

export default RegisterPage;
