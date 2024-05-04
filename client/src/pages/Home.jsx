import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CommunityCard from "../components/general/CommunityCard";
import LearningPlanCard from "../components/general/LearningPlanCard";
import { getLearningPlans } from "../lib/learningplan";
import "../styles/Home.css";

export default function Home() {
  const [learningPlans, setLearningPlans] = useState([]);

  useEffect(() => {
    const fetchLearningPlans = async () => {
      try {
        const fetch = await getLearningPlans();
        if (fetch.success) {
          console.log(fetch);
          setLearningPlans(fetch.learningplan);
        }
      } catch (error) {
        console.error("There has been an error fetching the lesson plan");
      }
    };

    fetchLearningPlans();
  }, []);

  // Get the last 4 learning plans or less if there are fewer than 4
  const lastFourLearningPlans = learningPlans.slice(-4);

  return (
    <div className="home-container">
      <h3 className="subsection-title">Your learning plans</h3>
      <div className="learningplan-section">
        <div className="learningplan-container">
          {lastFourLearningPlans.map((plan, index) => (
            <LearningPlanCard key={index} learningPlan={plan} />
          ))}
          {/* Render placeholder cards if there are less than 4 learning plans */}
          {lastFourLearningPlans.length < 4 &&
            Array(4 - lastFourLearningPlans.length)
              .fill()
              .map((_, index) => (
                <LearningPlanCard
                  key={index + lastFourLearningPlans.length}
                  learningPlan={null} // Pass null or an empty object if there is no learning plan
                />
              ))}
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
