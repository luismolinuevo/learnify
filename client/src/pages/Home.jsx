import { useEffect, useState } from "react";
import CommunityCard from "../components/general/CommunityCard";
import LearningPlanCard from "../components/general/LearningPlanCard";
import "../styles/Home.css";
import EastIcon from "@mui/icons-material/East";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h3 className="subsection-title">Your learning plans</h3>
      <div className="learningplan-section">
        <div className="learningplan-container">
          <LearningPlanCard />
          <LearningPlanCard />
          <LearningPlanCard />
          <LearningPlanCard />
        </div>
        <Link to={`/auth/signup/learn`} className="more-button add-plan">
          <AddCircleIcon className="icons add-plan-icon" fontSize="" />
          <p>Add a plan</p>
        </Link>
        <div className="more-button-container">
          <button className="more-button">
            <p>More</p>
            <EastIcon fontSize="" className="icons" />
          </button>
        </div>
      </div>
      <h3 className="subsection-title">Ask the community</h3>
      <div className="home-section">
        <div className="card-container">
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </div>
        <button className="more-button">
          <p>More</p>
          <EastIcon fontSize="" className="icons" />
        </button>
      </div>
    </div>
  );
}
