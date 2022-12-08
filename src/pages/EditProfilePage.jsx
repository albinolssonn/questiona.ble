import React from "react";
import EditProfileComponent from "../components/EditProfileComponent";
import ProfileHeaderComponent from "../components/ProfileHeaderComponent";
import SignedInNavbar from "../navigation/SignedInNavbar";

const EditProfilePage = () => {
  return (
    <div>
      <SignedInNavbar />
      <EditProfileComponent />
    </div>
  );
};

export default EditProfilePage;
