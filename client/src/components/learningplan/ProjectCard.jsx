import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ levelId }) {
  return (
    <div className="quiz-card-container">
      <h1>Capstone</h1>
      <p>Pratice what you learned with a capstone assignment</p>
      <Link to={`/sublevel/${levelId}`}>View more</Link>
    </div>
  );
}
