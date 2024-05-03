import { generatePlanPrompt } from "../helpers/prompts";
import { generateResponse } from "../services/openai";

export async function generateLearningPlan(req, res) {
  try {
    const { skill, skillLevel, dailyHours, deadline, whyLearn, learningStyle } =
      req.body;

    if (skill) {
      //This is will create the prompt
      let prompt = generateLearningPlan(
        skill,
        skillLevel,
        dailyHours,
        deadline,
        whyLearn,
        learningStyle
      );

      //This is get the response
      let learingplan = generateResponse(prompt);

      if (learingplan) {
        return res.status(200).json({
          success: true,
          message: "Successfully created learning plan",
          learingplan,
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "No vaild skill given",
      });
    }
  } catch (error) {
    console.log("Error with generating learning plan", error);
    return res.status(500).json({
      success: false,
      message: "There has been a server error",
      error,
    });
  }
}
