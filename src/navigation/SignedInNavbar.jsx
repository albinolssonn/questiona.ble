import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth } from "../server/firebase-config";
import "../stylesheets/NavbarStyles.css";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { signOut } from "firebase/auth";

const SignedInNavbar = () => {
  const signedInUser = auth.currentUser;
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(true);
  const { id } = useParams();

  // useEffect(() => {
  //   if (signedInUser) {
  //     setUserToggle(true);
  //   }
  // }, []);

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
    localStorage.clear();
  };

  if (signedInUser) {
    return (
      <div className="signedin-nav-section">
        <div className="logo">
          <h1 onClick={() => navigate("/")}>hint</h1>
        </div>
        {menuToggle && (
          <div className="nav-links">
            <div className="link-group"></div>

            <div className="rounded-link-group">
              <div
                className="menu-icon-btn"
                onClick={() => navigate("/explore")}
              >
                <SearchIcon />
              </div>

              <div
                className="menu-icon-btn"
                onClick={() => navigate(`/myprofile/${signedInUser.uid}`)}
              >
                <PersonIcon />
              </div>
              <div className="menu-icon-btn">
                <QuestionMarkIcon />
              </div>
              <div className="menu-icon-btn" onClick={logout}>
                <LogoutIcon />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="signedin-nav-section">
        <div className="logo">
          <h1 onClick={() => navigate("/")}>hint</h1>
        </div>
        {menuToggle && (
          <div className="nav-links">
            <div className="link-group">
              <Link to="/explore" id="link">
                Explore
              </Link>
            </div>

            <div className="link-group">
              <div className="signout-section" onClick={logout}>
                <LoginIcon />
                Sign in
              </div>

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
  }
};

export default SignedInNavbar;
