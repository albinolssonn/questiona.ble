import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth } from "../server/firebase-config";
import "../stylesheets/NavbarStyles.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { signOut } from "firebase/auth";

const SignedInNavbar = () => {
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(true);
  const { id } = useParams();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
    localStorage.clear();
  };

  return (
    <div className="signedin-nav-section">
      <div className="logo">
        <h1 onClick={() => navigate("/")}>Logotyp</h1>
      </div>
      {menuToggle && (
        <div className="nav-links">
          <div className="link-group">
            <Link to={`/myprofile/${id}`} id="link">
              My Profile
            </Link>
            <Link to="/explore" id="link">
              Explore
            </Link>
          </div>

          <div className="link-group">
            <div className="signout-section" onClick={logout}>
              <ExitToAppIcon />
              Sign out
            </div>

            {/* <div
              onClick={() => {
                navigate("/register");
              }}
              id="desktop-nav-btn"
            >
              Sign Up
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignedInNavbar;
