export async function generatePlanPrompt(
  skill,
  skillLevel,
  dailyHours,
  deadline,
  whyLearn,
  learningStyle
) {
  const prompt = `
    I want to learn a ${skill} and want you to create a detailed step by step plan(levels). 
    It has to be personalized to my needs(my skill level, daily hours committed, deadline, why I want to learn):
  
    I want to learn this because: ${whyLearn}
  
    Each level should have a reason for learning that(why I'm learning this), and what I'm learning, a title, and sublevels. 
    Each level should have a major project that will include things learned in the sublevels.
  
    The final level should be a task. Like a capstone project for example. It should use almost everything learned in the previous levels.
  
    Each Sublevel should be things that I need to learn/do in order to complete the main goal of the level. It should have a title, 
    what I'm learning, how I'm learning, give resources like what docs to read, who to watch on yt and etc(make sure the resources fit the users learning style),
    and project to build in order to learn that sublevel. The project should have requirements and description. 
    The requirements  and description should have a lot of detail so that the user knows exactly what they are making.
  
    The levels should start at the ${skillLevel} ${skill} skill level. And the lessons should take the skill level into account when creating the levels so that the user is reviewing and learning new things. 
    You should also take the skill level into account with your wording, and how you design the levels.
  
    Take the users learning styles ${learningStyle} in account when creating the levels. Make sure that its fits their learning styles well.
  
    The user is willing to commit ${dailyHours} hours per day. And wants to learn this in ${deadline}. Take the daily hours and deadline in to account when making the levels. 
    Make sure that the levels are actually doable in the time frame and skill level.
    `;
}
