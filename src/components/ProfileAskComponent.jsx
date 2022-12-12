import React, { useState } from "react";
import "../stylesheets/ProfileStyles.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";
import {
  addDoc,
  collection,
  doc,
  FieldValue,
  serverTimestamp,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "../server/firebase-config";
import { useParams } from "react-router-dom";

const ProfileAskComponent = () => {
  const signedInUser = auth.currentUser;
  const { id } = useParams();
  const [askToggle, setAskToggle] = useState(false);
  const [question, setQuestion] = useState("");
  const [askedToggle, setASkedToggle] = useState(false);

  const submitQuestion = async () => {
    const questionColRef = collection(db, "users", id, "unanswered_questions");
    await addDoc(questionColRef, {
      question: question,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="profile-ask-section">
      <div className="profile-ask-container">
        {askToggle ? (
          <div className="question-box">
            <div className="profile-ask-content">
              <div className="profile-ask-bar">
                <div className="bar-options">
                  <p>Font</p>
                </div>

                <div
                  className="close-question-box"
                  onClick={() => {
                    setAskToggle(false);
                  }}
                >
                  <CloseIcon />
                </div>
              </div>
              <textarea
                id="questionaire"
                placeholder="Ask me anything!"
                cols="30"
                rows="7"
                onChange={(event) => {
                  setQuestion(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="right-btn-container">
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Anonymous"
                />
              </FormGroup>

              <button onClick={submitQuestion} id="ask-btn">
                Send it!
              </button>
            </div>
          </div>
        ) : (
          <div className="ask-btn-div">
            <button
              onClick={() => {
                setAskToggle(true);
              }}
              id="ask-btn"
            >
              Ask me a question!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileAskComponent;
