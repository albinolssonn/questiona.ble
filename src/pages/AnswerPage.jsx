import React from "react";
import AnswerListComponent from "../components/AnswerListComponent";
import FooterComponent from "../navigation/FooterComponent";
import SignedInNavbar from "../navigation/SignedInNavbar";

const AnswerPage = () => {
  return (
    <div>
      <SignedInNavbar />
      <AnswerListComponent />
      <FooterComponent />
    </div>
  );
};

export default AnswerPage;
