import React from "react";
import "../../styles/LearningPlanCard.css";
import { Link } from "react-router-dom";

export default function LearningPlanCard({ learningPlan }) {
  if (!learningPlan) {
    return (
      <div className="learningCardContainer">
        <h1>title</h1>
        <h2>2 levels</h2>
        <h3>20h / 3Weeks</h3>
        <div className="bottomRow">
          <div className="skillLevel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-2 h-2 skillLevelSvg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>
            <p>Advanced</p>
          </div>
          <div className="continueContainer">
            <button className="continuePlan">Continue</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="learningCardContainer">
        <h1>{learningPlan.skill}</h1>
        <h2>{learningPlan.levelCount ? learningPlan.levelCount : 2} levels</h2>
        <h3>
          {learningPlan.dailyHours}h / {learningPlan.deadline} Weeks
        </h3>
        <div className="bottomRow">
          <div className="skillLevel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>
            <p>{learningPlan.skillLevel}</p>
          </div>
          <div className="continueContainer">
            <Link to={`/lessonplan/${learningPlan.id}`} className="continuePlan">Continue</Link>
          </div>
        </div>
      </div>
    );
  }
}
