import React from "react";
import ProfileAskComponent from "../components/ProfileAskComponent";
import ProfileListComponent from "../components/ProfileListComponent";
import ProfileHeaderComponent from "../components/ProfileHeaderComponent";
import FooterComponent from "../navigation/FooterComponent";

const ProfilePage = () => {
  return (
    <div className="page">
      <div className="main-content">
        <ProfileHeaderComponent />
        <ProfileAskComponent />
        <ProfileListComponent />
      </div>

      <div className="footer">
        <FooterComponent />
      </div>
    </div>
  );
};

export default ProfilePage;
