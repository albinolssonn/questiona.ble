import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/NavbarStyles.css";

const DesktopNavbar = () => {
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(true);

  useEffect(() => {
    setMenuBasedOnUrl();
  }, []);

  function setMenuBasedOnUrl() {
    if (
      window.location.pathname === "/register" ||
      window.location.pathname === "/login"
    ) {
      setMenuToggle(false);
    } else {
      setMenuToggle(true);
    }
  }

  //   const logout = async () => {
  //     await signOut(auth);
  //     navigate("/login");
  //     localStorage.clear();
  //   };

  return (
    <div className="desktop-nav-section">
      <div className="logo">
        <h1 onClick={() => navigate("/")}>Logotyp</h1>
      </div>
      {menuToggle && (
        <div className="desktop-nav-links">
          <div className="link-group">
            {/* <Link to="/job" id="link">
            Start
          </Link> */}
            <Link to="/explore" id="link">
              Explore
            </Link>
          </div>

          <div className="link-group">
            <Link to="/login" id="link">
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

export default DesktopNavbar;
