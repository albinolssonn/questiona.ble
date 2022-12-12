import React from "react";
import RegisterComponent from "../components/RegisterComponent";
import OverlayNavbar from "../navigation/OverlayNavbar";
import SignedInNavbar from "../navigation/SignedInNavbar";

const RegisterPage = () => {
  return (
    <div className="page">
      <SignedInNavbar />
      <RegisterComponent />
    </div>
  );
};

export default RegisterPage;
