import React from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link } from "react-router-dom";
import "../../styles/QuizCard.css"

//The quizz section that is at the right side of the screen in the course page
export default function QuizCard({ levels }) {
  return (
    <div className="quiz-card-container">
      <h1>Quizz</h1>
      <div>
        {levels.map((level, index) => (
          <div key={index} className="quiz-card-level">
            <LockOpenIcon />
            <Link to={`/level/${level.id}`}>{level?.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
