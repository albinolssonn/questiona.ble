import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../server/firebase-config";
import "../stylesheets/NavbarStyles.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const ScaledDownNavbar = () => {
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(true);
  return (
    <div className="scaled-nav-section">
      <div className="logo">
        <h1 onClick={() => navigate("/")}>Logotyp</h1>
      </div>
      {menuToggle && (
        <div className="desktop-nav-links">
          <div className="link-group">
            <Link to="/myprofile/1" id="link">
              My Profile
            </Link>
            <Link to="/explore" id="link">
              Explore
            </Link>
          </div>

          <div className="link-group">
            <Link to="/login" id="link">
              <ExitToAppIcon />
              Login
            </Link>
            <div
              onClick={() => {
                navigate("/register");
              }}
              id="desktop-nav-btn"
            >
              Sign Up
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScaledDownNavbar;
