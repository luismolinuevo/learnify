export async function generatePlanPrompt(
  skill,
  skillLevel,
  dailyHours,
  deadline,
  whyLearn,
  learningStyle
) {
  // const prompt = `
  //   I want to learn a ${skill} and want you to create a detailed step by step plan(levels).
  //   It has to be personalized to my needs(my skill level, daily hours committed, deadline, why I want to learn):

  //   I want to learn this because: ${whyLearn}

  //   Each level should have a reason for learning that(why I'm learning this), and what I'm learning, a title, and sublevels.
  //   Each level should have a major project that will include things learned in the sublevels.

  //   The final level should be a task. Like a capstone project for example. It should use almost everything learned in the previous levels.

  //   Each Sublevel should be things that I need to learn/do in order to complete the main goal of the level. It should have a title,
  //   what I'm learning, how I'm learning, give resources like what docs to read, who to watch on yt and etc(make sure the resources fit the users learning style),
  //   and project to build in order to learn that sublevel. The project should have requirements and description.
  //   The requirements  and description should have a lot of detail so that the user knows exactly what they are making.

  //   The levels should start at the ${skillLevel} ${skill} skill level. And the lessons should take the skill level into account when creating the levels so that the user is reviewing and learning new things.
  //   You should also take the skill level into account with your wording, and how you design the levels.

  //   Take the users learning styles ${learningStyle} in account when creating the levels. Make sure that its fits their learning styles well.

  //   The user is willing to commit ${dailyHours} hours per day. And wants to learn this in ${deadline}. Take the daily hours and deadline in to account when making the levels.
  //   Make sure that the levels are actually doable in the time frame and skill level.

  //   I want this is json format. I plan to save the levels and sublevels in a db
  //   `;
  const prompt = `
  Give me a detailed learning path in a JSON format. The variables are:
  - Skill: ${skill}
  - Skill Level: ${skillLevel}
  - Daily Hours: ${dailyHours}
  - Deadline: ${deadline}
  - Why Learn: ${whyLearn}
  - Learning Style: ${learningStyle}
  
  Use the variables, additional information, and comments to better personalize the levels of the output. Be as specific and detailed as possible when creating all the data. For the output, there should be levels and sublevels. The levels are broader skills/goals that contain reasoning, topic, hours for completion, and learning style. The final level should be a project that covers all the topics listed, like a final project, and additional resources/suggestions.
  
  The sublevels are nested in the levels and need to be more detailed tasks/skills than the main goal in the parent level. The "how" and "what" should be as detailed as a syllabus. Each sublevel entry should contain a title, how I'm learning, projects to better learn that skill, and resources to learn (from YouTube, DataCamp, edX, Coursera, Educative, etc.). The resources should be personalized to the learning style and all the other variables.
  
  The levels should also start at the user's skill level and should help them improve to higher skills levels. For example, if my skill level is intermediate in a topic, the levels should start at intermediate topics and help me improve to an advanced or above skill level.
  
  The daily hour commitment and deadline should be taken into account when creating levels. Make sure that it's doable in the timeframe.

  Try and make the learning incremental
  
  The output should be in a JSON format like the example below, with the same key names but more personalized data:

  {
    "title": "Level 1: Building a Strong Foundation",
    "reason": "To establish a solid understanding of the fundamental concepts of web development.",
    "what": "Learn HTML, CSS, and basic JavaScript.",
    "hours_to_complete": 60,
    "sublevels": [
      {
        "title": "Sublevel 1.1: Mastering HTML",
        "what": "Understand the structure and semantic markup of HTML.",
        "how": "Read Mozilla Developer Network (MDN) documentation, watch Brad Traversy’s HTML Crash Course on YouTube, and practice building static web pages.",
        "resources": [
          {
            "title": "MDN Web Docs - HTML",
            "link": "https://developer.mozilla.org/en-US/docs/Web/HTML"
          },
          {
            "title": "HTML Crash Course for Absolute Beginners (Brad Traversy)",
            "link": "https://www.youtube.com/watch?v=UB1O30fR-EE"
          }
        ],
        "project": {
          "title": "Personal Website",
          "description": "Create a personal website with multiple pages that showcase your portfolio, skills, and contact information.",
          "requirements": [
            "Homepage with an introduction",
            "Portfolio page displaying projects",
            "Contact page with a form"
          ]
        }
      }
    ]
  }
`;


  return prompt;
}
