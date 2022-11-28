import React from "react";
import "../stylesheets/ProfileStyles.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ProfileHeaderComponent = () => {
  return (
    <div className="profile-header-section">
      <div className="profile-header-container">
        {/* <img
          id="profile-pic"
          src="https://picsum.photos/id/237/200/300"
          alt=""
        /> */}
        <div className="profile-pic"></div>
        <h3>@username</h3>
        <button id="subscribe-btn">Subscribe</button>
        <button id="follow-btn">Follow</button>
      </div>
      <div className="go-back-btn">
        <ArrowBackIosNewIcon />
        <p>Back</p>
      </div>
    </div>
  );
};

export default ProfileHeaderComponent;
