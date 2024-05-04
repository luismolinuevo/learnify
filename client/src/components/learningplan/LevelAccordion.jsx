import React, { useState } from "react";
import "../../styles/LevelAccordion.css";
import { Link } from "react-router-dom";
import CompleteLevel from "./CompleteLevel";

function LevelAccordion({ levels }) {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleAccordion = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className="accordion-container">
      {levels && levels.length > 0 ? (
        levels.map((level, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-header ${
                expandedItems.includes(index) ? "expanded" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-title">{level.title}</div>
              <div className="accordion-icon">
                {expandedItems.includes(index) ? (
                  <span>&#9650;</span>
                ) : (
                  <span>&#9660;</span>
                )}
              </div>
            </div>
            {expandedItems.includes(index) && (
              <div className="accordion-content">
                {level.sublevels.map((sublevel, subIndex) => (
                  <div className="sublevel" key={subIndex}>
                    <span>
                      <CompleteLevel
                        isCompleted={sublevel?.isCompleted}
                        sublevelId={sublevel?.id}
                      />
                    </span>
                    <Link
                      to={`/sublevel/${sublevel?.id}`}
                      className="sublevel-title"
                    >
                      {sublevel.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No levels</p>
      )}
    </div>
  );
}

export default LevelAccordion;
