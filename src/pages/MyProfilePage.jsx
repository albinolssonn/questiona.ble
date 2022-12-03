import React from "react";
import ProfileHeaderComponent from "../components/ProfileHeaderComponent";
import ProfileListComponent from "../components/ProfileListComponent";
import FooterComponent from "../navigation/FooterComponent";
import ScaledDownNavbar from "../navigation/ScaledDownNavbar";

const MyProfilePage = () => {
  return (
    <div className="page">
      <div className="main-content">
        <ScaledDownNavbar />
        <ProfileHeaderComponent />
        <ProfileListComponent />
      </div>

      <div className="footer">
        <FooterComponent />
      </div>
    </div>
  );
};

export default MyProfilePage;
