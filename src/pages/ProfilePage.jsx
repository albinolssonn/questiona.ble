import React from "react";
import ProfileAskComponent from "../components/ProfileAskComponent";
import ProfileListComponent from "../components/ProfileListComponent";
import ProfileHeaderComponent from "../components/ProfileHeaderComponent";

const ProfilePage = () => {
  return (
    <div>
      <ProfileHeaderComponent />
      <ProfileAskComponent />
      <ProfileListComponent />
    </div>
  );
};

export default ProfilePage;
