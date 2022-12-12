import React, { useEffect } from "react";
import "../stylesheets/ProfileStyles.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../server/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";

const ProfileHeaderComponent = () => {
  const signedInUser = auth.currentUser;
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const userColRef = doc(db, "users", id);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const tmpUser = await getDoc(userColRef);

      if (tmpUser.exists()) {
        setUser(tmpUser.data());
      }
    } catch (error) {
      console.log("User not found!");
    }
  };

  return (
    <div className="profile-header-section">
      <div className="profile-header-container">
        <img id="profile-pic" src={user.img_link} alt="" />
        <div className="profile-pic"></div>
        <h3>@{user.username}</h3>
        {signedInUser ? (
          <div className="header-buttons">
            <button
              onClick={() => navigate(`/myprofile/${signedInUser.uid}/edit`)}
              id="edit-profile-btn"
            >
              Edit profile
            </button>
          </div>
        ) : (
          <div className="header-buttons">
            <button id="subscribe-btn">Subscribe</button>
            <button id="follow-btn">Follow</button>
          </div>
        )}
      </div>
      {!signedInUser && (
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
