import React, { useEffect } from "react";
import "../stylesheets/ProfileStyles.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { auth } from "../server/firebase-config";

const ProfileHeaderComponent = () => {
  const navigate = useNavigate();

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
        {auth.currentUser ? (
          <div className="header-buttons">
            <button id="edit-profile-btn">Edit profile</button>
          </div>
        ) : (
          <div className="header-buttons">
            <button id="subscribe-btn">Subscribe</button>
            <button id="follow-btn">Follow</button>
          </div>
        )}
      </div>
      {!auth.currentUser && (
        <div
          className="go-back-btn"
          onClick={() => {
            navigate("/explore");
          }}
        >
          <ArrowBackIosNewIcon />
          <p>Back</p>
        </div>
      )}
    </div>
  );
};

export default ProfileHeaderComponent;
