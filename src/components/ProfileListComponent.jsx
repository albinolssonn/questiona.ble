import React from "react";
import "../stylesheets/ProfileStyles.css";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ProfileListComponent = () => {
  return (
    <div className="answer-list-section">
      <div className="answer-list-container">
        <div className="answer-list-filter-bar">
          <h4>Sort Questions</h4>
          <div className="filter-buttons">
            <button id="filter-btn">Latest</button>
            <button id="filter-btn">Most liked</button>
            <button id="filter-btn">Users favourites</button>
          </div>
        </div>
        <div className="question-card">
          <div className="intro-bar">
            <div className="user-info">
              <div className="profile-pic-mini"></div>
              <h4>username answers to...</h4>
            </div>

            <div className="more-section">
              <MoreHorizIcon />
            </div>
          </div>
          <div className="card-content">
            <div className="question">
              <QuestionMarkIcon />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua?
              </p>
            </div>
            <div className="answer">
              <ChatIcon />
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="interaction-bar">
            <div className="icon-text">
              <FavoriteIcon />
              <p>Like</p>
            </div>
            <div className="icon-text">
              <IosShareIcon />
              <p>Share</p>
            </div>
            <div className="icon-text">
              <VolunteerActivismIcon />
              <p>Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileListComponent;
