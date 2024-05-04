import React, { useState, useEffect } from "react";
import LearningPlanCard from "../components/general/LearningPlanCard";
import { getLearningPlan } from "../lib/learningplan";
import { useParams } from "react-router-dom";

export default function Course() {
  let { id } = useParams();
  const [learningPlan, setLearningPlan] = useState([]);

  useEffect(() => {
    const fetchLearningPlan = async () => {
      try {
        if (id) {
          const fetch = await getLearningPlan(id);

          if (fetch.success) {
            console.log(fetch)
            setLearningPlan(fetch.learningplan);
          }
        }
      } catch (error) {
        console.error("There has been a error fetching the lesson plan");
      }
    };

    fetchLearningPlan();
  }, [id]);
  
  return (
    <div>
      <LearningPlanCard learningPlan={learningPlan}/>
    </div>
  );
}
