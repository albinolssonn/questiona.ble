import React from "react";
import ProfileAskComponent from "../components/ProfileAskComponent";
import ProfileListComponent from "../components/ProfileListComponent";
import ProfileHeaderComponent from "../components/ProfileHeaderComponent";
import FooterComponent from "../navigation/FooterComponent";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../server/firebase-config";
import SignedInNavbar from "../navigation/SignedInNavbar";
import DesktopNavbar from "../navigation/DesktopNavbar";

const ProfilePage = () => {
  const [loggedInToggle, setLoggedInToggle] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      setLoggedInToggle(true);
    }
  }, []);

  return (
    <div className="page">
      <div className="main-content">
        {loggedInToggle ? <SignedInNavbar /> : <DesktopNavbar />}
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
