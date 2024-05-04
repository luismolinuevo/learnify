import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSubLevel } from "../lib/levels";
import "../styles/Sublevel.css";

export default function SubLevel() {
  const { id } = useParams();
  const [sublevel, setSubLevel] = useState([]);

  useEffect(() => {
    const fetchSubLevel = async () => {
      try {
        if (id) {
          const response = await getSubLevel(id);

          if (response.success) {
            console.log(response);
            setSubLevel(response.sublevel);
          }
        }
      } catch (error) {
        console.error("Error fetching sublevel:", error);
      }
    };

    fetchSubLevel();
  }, [id]);

  return (
    <div className="sublevel-container">
      {sublevel && (
        <>
          <h1 className="sublevel-title">{sublevel?.title}</h1>
          <div className="sublevel-details">
            <h3 className="sublevel-heading">What You'll Learn:</h3>
            <p className="sublevel-info">{sublevel?.what}</p>
            <h3 className="sublevel-heading">How You'll Learn:</h3>
            <p className="sublevel-info">{sublevel?.how}</p>
            <h3 className="sublevel-heading">Resources:</h3>
            <ul className="sublevel-resources">
              {sublevel?.resources && sublevel?.resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
            {sublevel?.project && (
              <>
                <h1 className="sublevel-heading">Project:</h1>
                <h1 className="sublevel-info">{sublevel?.project.title}</h1>
                <h3 className="sublevel-info">{sublevel?.project.description}</h3>
                <h4 className="sublevel-heading">Project Requirements:</h4>
                <ul className="sublevel-resources">
                  {sublevel.project.requirements && sublevel.project.requirements.map((requirement, index) => (
                    <li key={index} className="sublevel-info">{requirement}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
  
}
