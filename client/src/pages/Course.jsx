import React, { useState, useEffect } from "react";
import LearningPlanCard from "../components/general/LearningPlanCard";
import { getLearningPlan } from "../lib/learningplan";
import { getLevels } from "../lib/levels";
import { Link, useParams } from "react-router-dom";
import LevelAccordion from "../components/levels/LevelAccordion";

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
    <div>
      <div>
        <div>
          <p>Your learning path</p>
          <LearningPlanCard learningPlan={learningPlan} />
        </div>
        {/* {levels && levels.length > 0 ? (
          levels.map((level, index) => (
            <div key={index}>
              <h1>{level?.title}</h1>
              {level.sublevels.map((sublevel, index) => (
                <div className="sublevel" key={index}>
                  <p>Star</p>
                  <Link to={"/"}>{sublevel?.title}</Link>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No levels</p>
        )} */}
        <LevelAccordion levels={levels}/>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
