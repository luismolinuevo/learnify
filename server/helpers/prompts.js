export async function generatePlanPrompt(
  skill,
  skillLevel,
  dailyHours,
  deadline,
  whyLearn,
  learningStyle
) {
  const prompt = `
  Give me a detailed learning path. The variables are:
  - Skill: ${skill}
  - Skill Level: ${skillLevel}
  - Daily Hours: ${dailyHours}
  - Deadline: ${deadline}
  - Why Learn: ${whyLearn}
  - Learning Style: ${learningStyle}
  
  Use the variables, additional information, and comments to better personalize the levels of the output. Be as specific and detailed as possible when creating all the data. For the output, there should be levels and sublevels. The levels are broader skills/goals that contain reasoning, topic, hours for completion, and learning style. The final level should be a project that covers all the topics listed, like a final project, and additional resources/suggestions. Make the learning incremental with at least 3 main levels with at least 3 sublevels per level
  
  The sublevels are nested in the levels and need to be more detailed tasks/skills than the main goal in the parent level. The "how" and "what" should be as detailed as a syllabus. Each sublevel entry should contain a title, how I'm learning, projects to better learn that skill, and resources to learn (from YouTube, DataCamp, edX, Coursera, Educative, etc.). The resources should be personalized to the learning style and all the other variables.
  
  The levels should also start at the user's skill level and should help them improve to higher skills levels. For example, if my skill level is intermediate in a topic, the levels should start at intermediate topics and help me improve to an advanced or above skill level.
  
  The daily hour commitment and deadline should be taken into account when creating levels. Make sure that it's doable in the timeframe.
  
  The output should be in a JSON format like the example(just and example on how to name keys, and format) below, with the same key names but more personalized data:

  [
    {
      "title": "Level 1: Mastering the Basics",
      "reason": "To establish a strong foundation in ${skill}.",
      "what": "Focus on fundamental concepts and core skills.",
      "hours_to_complete": 60,
      "sublevels": [
        {
          "title": "Sublevel 1.1: Understanding Core Concepts",
          "what": "Grasp essential concepts and terminology of ${skill}.",
          "how": "Start with online tutorials and interactive courses to build basic knowledge.",
          "resources": [
            {
              "title": "Online Tutorial: ${skill} Basics",
              "link": "https://example.com/${skill}_basics"
            },
            {
              "title": "Interactive Course on ${skill} Fundamentals",
              "link": "https://example.com/${skill}_fundamentals"
            }
          ],
          "project": {
            "title": "Basic ${skill} Project",
            "description": "Create a simple ${skill} application or website to practice newly acquired concepts.",
            "requirements": [
              "Implement basic functionality",
              "Apply styling and layout techniques",
              "Include interactive elements"
            ]
          }
        },
        {
          "title": "Sublevel 1.2: Practicing ${skill}",
          "what": "Reinforce learning through practical exercises and projects.",
          "how": "Work on coding challenges, mini-projects, and exercises.",
          "resources": [
            {
              "title": "Coding Challenges on ${skill}",
              "link": "https://example.com/${skill}_challenges"
            },
            {
              "title": "Mini-Projects for ${skill} Practice",
              "link": "https://example.com/${skill}_projects"
            }
          ],
          "project": {
            "title": "Interactive ${skill} Project",
            "description": "Build an interactive ${skill} application with user input and dynamic content.",
            "requirements": [
              "User-friendly interface",
              "Dynamic content generation",
              "Input validation and error handling"
            ]
          }
        },
        {
          "title": "Sublevel 1.3: Exploring Advanced Topics",
          "what": "Dive deeper into advanced concepts and techniques.",
          "how": "Explore advanced tutorials, articles, and case studies.",
          "resources": [
            {
              "title": "Advanced ${skill} Techniques",
              "link": "https://example.com/advanced_${skill}_techniques"
            },
            {
              "title": "Case Studies on ${skill} Applications",
              "link": "https://example.com/${skill}_case_studies"
            }
          ],
          "project": {
            "title": "Advanced ${skill} Project",
            "description": "Develop a complex ${skill} application that incorporates advanced features and functionality.",
            "requirements": [
              "Complex data management",
              "Integration of external APIs",
              "Implementation of advanced algorithms"
            ]
          }
        }
      ]
    },
    {
      "title": "Level 2: Enhancing ${skill} Proficiency",
      "reason": "To deepen understanding and improve proficiency in ${skill}.",
      "what": "Focus on advanced topics and specialized areas within ${skill}.",
      "hours_to_complete": 80,
      "sublevels": [
        {
          "title": "Sublevel 2.1: Advanced ${skill} Concepts",
          "what": "Explore advanced ${skill} concepts and techniques.",
          "how": "Enroll in advanced online courses and participate in coding challenges.",
          "resources": [
            {
              "title": "Advanced ${skill} Course",
              "link": "https://example.com/advanced_${skill}_course"
            },
            {
              "title": "Coding Challenges for Advanced ${skill}",
              "link": "https://example.com/advanced_${skill}_challenges"
            }
          ],
          "project": {
            "title": "Advanced ${skill} Project",
            "description": "Build a sophisticated ${skill} application with complex features and functionality.",
            "requirements": [
              "Implementation of advanced algorithms",
              "Integration of cutting-edge technologies",
              "Optimization for performance and scalability"
            ]
          }
        },
        {
          "title": "Sublevel 2.2: Specialized ${skill} Topics",
          "what": "Explore specialized areas within ${skill} such as frameworks or libraries.",
          "how": "Study advanced ${skill} libraries and frameworks through documentation and practical examples.",
          "resources": [
            {
              "title": "Advanced ${skill} Framework Documentation",
              "link": "https://example.com/advanced_${skill}_framework"
            },
            {
              "title": "Practical Examples of ${skill} Libraries",
              "link": "https://example.com/${skill}_library_examples"
            }
          ],
          "project": {
            "title": "Specialized ${skill} Project",
            "description": "Develop a specialized ${skill} application using advanced frameworks or libraries.",
            "requirements": [
              "Integration of specific framework or library",
              "Implementation of advanced features",
              "Optimization for performance and usability"
            ]
          }
        },
        {
          "title": "Sublevel 2.3: Real-world Applications",
          "what": "Apply ${skill} knowledge to real-world scenarios and projects.",
          "how": "Work on industry-specific projects or contribute to open-source projects.",
          "resources": [
            {
              "title": "Industry-specific ${skill} Projects",
              "link": "https://example.com/industry_${skill}_projects"
            },
            {
              "title": "Contribution to Open-source ${skill} Projects",
              "link": "https://example.com/open-source_${skill}_projects"
            }
          ],
          "project": {
            "title": "Real-world ${skill} Project",
            "description": "Participate in a real-world ${skill} project to gain practical experience and contribute to a larger community.",
            "requirements": [
              "Address real-world challenges",
              "Collaborate with team members",
              "Contribute to project documentation and maintenance"
            ]
          }
        }
      ]
    },
    {
      "title": "Level 3: Mastery and Specialization",
      "reason": "To achieve mastery and specialization in ${skill}.",
      "what": "Focus on mastering advanced topics and exploring specialized areas within ${skill}.",
      "hours_to_complete": 100,
      "sublevels": [
        {
          "title": "Sublevel 3.1: Mastery of Advanced Techniques",
          "what": "Master advanced techniques and methodologies in ${skill}.",
          "how": "Engage in advanced coding challenges, research papers, and hands-on projects.",
          "resources": [
            {
              "title": "Advanced ${skill} Research Papers",
              "link": "https://example.com/advanced_${skill}_research"
            },
            {
              "title": "Hands-on Projects for Advanced ${skill} Techniques",
              "link": "https://example.com/advanced_${skill}_projects"
            }
          ],
          "project": {
            "title": "Mastering ${skill} Project",
            "description": "Undertake a comprehensive project that demonstrates mastery of advanced ${skill} concepts and techniques.",
            "requirements": [
              "Implementation of cutting-edge techniques",
              "In-depth analysis and optimization",
              "Documentation of advanced methodologies"
            ]
          }
        },
        {
          "title": "Sublevel 3.2: Specialization in ${skill} Domain",
          "what": "Specialize in a specific domain or aspect of ${skill}.",
          "how": "Explore specialized courses, research papers, and industry certifications.",
          "resources": [
            {
              "title": "Specialized ${skill} Courses",
              "link": "https://example.com/specialized_${skill}_courses"
            },
            {
              "title": "Industry Certifications for ${skill} Specialization",
              "link": "https://example.com/${skill}_certifications"
            }
          ],
          "project": {
            "title": "Specialization in ${skill} Project",
            "description": "Develop a project that showcases expertise in a specific domain or aspect of ${skill}.",
            "requirements": [
              "Demonstration of specialized knowledge",
              "Innovation in chosen domain",
              "Validation through industry-standard practices"
            ]
          }
        },
        {
          "title": "Sublevel 3.3: Innovation and Research",
          "what": "Explore cutting-edge research and innovation in ${skill}.",
          "how": "Participate in research projects, academic conferences, and innovation challenges.",
          "resources": [
            {
              "title": "Cutting-edge ${skill} Research Papers",
              "link": "https://example.com/cutting-edge_${skill}_research"
            },
            {
              "title": "Academic Conferences on ${skill} Innovation",
              "link": "https://example.com/${skill}_innovation_conferences"
            }
          ],
          "project": {
            "title": "Innovation and Research Project",
            "description": "Contribute to a research project or develop an innovative ${skill} solution.",
            "requirements": [
              "Original research contribution",
              "Innovative approach to problem-solving",
              "Potential for real-world impact"
            ]
          }
        }
      ]
    }
  ]
`;


  return prompt;
}
