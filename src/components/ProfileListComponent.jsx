import React from "react";
import "../stylesheets/ProfileStyles.css";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../server/firebase-config";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const ProfileListComponent = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const qaColRef = collection(db, "users", id, "answered_questions");
  const userColRef = doc(db, "users", id);

  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    getAllAnseredQuestions();
    getUserInfo();
  }, []);

  const getAllAnseredQuestions = async () => {
    const tmpList = await getDocs(qaColRef);
    setQuestionList(
      tmpList.docs.map((question) => ({ ...question.data(), id: question.id }))
    );
  };

  const getUserInfo = async () => {
    const tmpUser = await getDoc(userColRef);

    if (tmpUser.exists()) {
      setUser(tmpUser.data());
    } else {
      console.log("User not found!");
    }
  };

  const likeFunction = async (qid) => {
    const questionDocRef = doc(db, "users", id, "answered_questions", qid);
    await updateDoc(questionDocRef, {
      likers: arrayUnion(auth.currentUser.uid),
    });
  };

  const unlikeFunction = async (qid) => {};

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

        {questionList.map((question, key) => {
          return (
            <div className="question-card" key={key}>
              <div className="intro-bar">
                <div className="user-info">
                  <img id="profile-pic-mini" src={user.img_link} alt="" />
                  <h4>{user.username} answers to...</h4>
                </div>

                <div className="more-section">
                  <MoreHorizIcon />
                </div>
              </div>
              <div className="card-content">
                <div className="question">
                  <QuestionMarkIcon />
                  <p>{question.question}</p>
                </div>
                <div className="answer">
                  <ChatIcon />
                  <p>{question.answer}</p>
                </div>
              </div>
              <div className="interaction-bar">
                <div
                  className="icon-text"
                  onClick={() => {
                    likeFunction(question.id);
                  }}
                >
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
          );
        })}
      </div>
    </div>
  );
};

export default ProfileListComponent;
