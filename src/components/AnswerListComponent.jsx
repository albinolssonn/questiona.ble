import React, { useState } from "react";
import "../stylesheets/AnswerStyles.css";

const AnswerListComponent = () => {
  const [questions, setQuestions] = useState([]);

  const getAllAnseredQuestions = async () => {
    const tmpList = await getDocs(qaColRef);
    setQuestionList(
      tmpList.docs.map((question) => ({ ...question.data(), id: question.id }))
    );
  };

  return (
    <div className="answer-section">
      <div className="answer-container">
        <div className="answer-list">
          <div className="answer-card"></div>
        </div>
      </div>
    </div>
  );
};

export default AnswerListComponent;
