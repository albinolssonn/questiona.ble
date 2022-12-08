import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { auth, db } from "../server/firebase-config";
import "../stylesheets/ProfileStyles.css";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import {
  updateUsername,
  updateName,
  updateCountry,
} from "../functions/UpdateProfileFunctions";

const EditProfileComponent = () => {
  const signedInUser = auth.currentUser;
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newEmailAddress, setNewEmailAddress] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [changeToggleUsername, setChangeToggleUsername] = useState(false);
  const [changeToggleEmail, setChangeToggleEmail] = useState(false);
  const [changeToggleName, setChangeToggleName] = useState(false);
  const [changeToggleCountry, setChangeToggleCountry] = useState(false);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const userColRef = doc(db, "users", id);
    const tmpUser = await getDoc(userColRef);

    if (tmpUser.exists()) {
      setUser(tmpUser.data());
    } else {
      console.log("User not found!");
    }
  };

  //   const updateEmailAddress = () => {};

  const updateUsernameHandler = () => {
    updateUsername(newUsername, id);
    setChangeToggleUsername(false);
    getUserInfo();
  };

  const updateNameHandler = () => {
    updateName(newName, id);
    setChangeToggleName(false);
    getUserInfo();
  };

  const updateCountryHandler = () => {
    updateCountry(newCountry, id);
    setChangeToggleCountry(false);
    getUserInfo();
  };

  return (
    <div className="edit-profile-section">
      <div
        className="edit-profile-container"
        style={{ width: "700px", margin: "auto" }}
      >
        <div className="edit-profile-content" style={{ padding: "20px" }}>
          <div className="edit-profile-title" style={{ marginBottom: "20px" }}>
            <h1>Account Settings</h1>
          </div>

          <div
            className="edit-profile-account-info"
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <div className="acount-info-row">
              <div className="text-section">
                <p>Username: </p>
                {changeToggleUsername ? (
                  <>
                    <input
                      type="text"
                      id="change-input"
                      onChange={(event) => {
                        setNewUsername(event.target.value);
                      }}
                    />
                  </>
                ) : (
                  <>{user.username}</>
                )}
              </div>
              {changeToggleUsername ? (
                <div className="change-btns">
                  <button id="change-btn" onClick={updateUsernameHandler}>
                    <CheckIcon />
                  </button>
                  <button
                    id="change-btn"
                    onClick={() => setChangeToggleUsername(false)}
                  >
                    <CloseIcon />
                  </button>
                </div>
              ) : (
                <button
                  id="change-btn"
                  onClick={() => setChangeToggleUsername(true)}
                >
                  <EditIcon />
                </button>
              )}
            </div>

            <div className="acount-info-row">
              <div className="text-section">
                <p>Email: </p>
                {changeToggleEmail ? (
                  <>
                    <input type="text" id="change-input" />
                  </>
                ) : (
                  <>{user.email_address}</>
                )}
              </div>
              {changeToggleEmail ? (
                <div className="change-btns">
                  <button
                    id="change-btn"
                    onClick={() => setChangeToggleEmail(false)}
                  >
                    <CheckIcon />
                  </button>
                  <button
                    id="change-btn"
                    onClick={() => setChangeToggleEmail(false)}
                  >
                    <CloseIcon />
                  </button>
                </div>
              ) : (
                <button
                  id="change-btn"
                  onClick={() => setChangeToggleEmail(true)}
                >
                  <EditIcon />
                </button>
              )}
            </div>

            <div className="acount-info-row">
              <div className="text-section">
                <p>Name: </p>
                {changeToggleName ? (
                  <>
                    <input
                      type="text"
                      id="change-input"
                      onChange={(event) => {
                        setNewName(event.target.value);
                      }}
                    />
                  </>
                ) : (
                  <>{user.name}</>
                )}
              </div>
              {changeToggleName ? (
                <div className="change-btns">
                  <button id="change-btn" onClick={updateNameHandler}>
                    <CheckIcon />
                  </button>
                  <button
                    id="change-btn"
                    onClick={() => setChangeToggleName(false)}
                  >
                    <CloseIcon />
                  </button>
                </div>
              ) : (
                <button
                  id="change-btn"
                  onClick={() => setChangeToggleName(true)}
                >
                  <EditIcon />
                </button>
              )}
            </div>

            <div className="acount-info-row">
              <div className="text-section">
                <p>Country: </p>
                {changeToggleCountry ? (
                  <>
                    <input
                      type="text"
                      id="change-input"
                      onChange={(event) => {
                        setNewCountry(event.target.value);
                      }}
                    />
                  </>
                ) : (
                  <>{user.country}</>
                )}
              </div>
              {changeToggleCountry ? (
                <div className="change-btns">
                  <button id="change-btn" onClick={updateCountryHandler}>
                    <CheckIcon />
                  </button>
                  <button
                    id="change-btn"
                    onClick={() => setChangeToggleCountry(false)}
                  >
                    <CloseIcon />
                  </button>
                </div>
              ) : (
                <button
                  id="change-btn"
                  onClick={() => setChangeToggleCountry(true)}
                >
                  <EditIcon />
                </button>
              )}
            </div>

            <div className="acount-info-row">
              {user.img_link}
              <button id="change-btn">
                <EditIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileComponent;
