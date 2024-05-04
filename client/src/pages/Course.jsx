import React, { useState, useEffect } from "react";
import LearningPlanCard from "../components/general/LearningPlanCard";
import { getLearningPlan } from "../lib/learningplan";
import { getLevels } from "../lib/levels";
import { Link, useParams } from "react-router-dom";
import LevelAccordion from "../components/learningplan/LevelAccordion";
import "../styles/LearningPlan.css";
import DateCalendarValue from "../components/general/Calendar";
import QuizCard from "../components/learningplan/QuizCard";
import ProjectCard from "../components/learningplan/ProjectCard";

export default function Course() {
  let { id } = useParams();
  const [learningPlan, setLearningPlan] = useState([]);
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const fetchLearningPlan = async () => {
      try {
        if (id) {
          const fetch = await getLearningPlan(id);

          if (fetch.success) {
            console.log(fetch);
            setLearningPlan(fetch.learningplan);
          }
        }
      } catch (error) {
        console.error("There has been a error fetching the lesson plan");
      }
    };

    const fetchLevels = async () => {
      try {
        if (id) {
          const fetch = await getLevels(id);

          if (fetch.success) {
            console.log(fetch);
            setLevels(fetch.levels);
          }
        }
      } catch (error) {
        console.error("There as been a error fetching learning plan levels");
      }
    };

    fetchLearningPlan();
    fetchLevels();
  }, [id]);

  return (
    <div className="learning-plan">
      <div>
        <div className="plan-section">
          <div>
            <p>Your learning path</p>
            <LearningPlanCard learningPlan={learningPlan} />
          </div>
        </div>
        <LevelAccordion levels={levels} />
      </div>
      <div className="plan-section">
        <div>
          <DateCalendarValue />
          <p className="streak">4 day streak!!!</p>
        </div>
      </div>
      <div className="plan-section course-quiz">
        <aside className="course-cards">
          <QuizCard levels={levels} />
          <ProjectCard />
          <div className="plan-progress-container">
            <img
              src="/images/planprogress.png"
              alt=""
              className="plan-progress"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
