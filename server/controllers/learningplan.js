import prisma from "../db/index.js";
import { generatePlanPrompt } from "../helpers/prompts.js";
import { generateResponse } from "../services/openai.js";

export async function generateLearningPlan(req, res) {
  try {
    const { skill, skillLevel, dailyHours, deadline, whyLearn, learningStyle } =
      req.body;

    if (skill) {
      //This is will create the prompt
      let prompt = await generatePlanPrompt(
        skill,
        skillLevel,
        dailyHours,
        deadline,
        whyLearn,
        learningStyle
      );

      //This is get the response
      let learningplan = await generateResponse(prompt);

      if (learningplan && learningplan.length > 0) {
        return res.status(200).json({
          success: true,
          message: "Successfully created learning plan",
          learningplan,
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "No learning plan created",
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

export async function createLearningPlan(req, res) {
  try {
    const { skill, skillLevel, dailyHours, deadline, whyLearn, learningStyle } =
      req.body;

    const newPlan = await prisma.learningPlan.create({
      data: {
        skill: skill,
        skillLevel: skillLevel,
        dailyHours: dailyHours,
        deadline: deadline,
        whyLearn: whyLearn,
        learningStyle: learningStyle,
      },
    });

    if (newPlan) {
      return res.status(201).json({
        success: true,
        message: "Created new learning plan",
        newPlan,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Unable to to create plan",
      });
    }
  } catch (error) {
    console.log("Error with creating learning plan", error);
    return res.status(500).json({
      success: false,
      message: "There has been a server error",
      error,
    });
  }
}

export async function getLearningPlan(req, res) {
    try {
      const {planId} = req.params;
  
      const learningplan = await prisma.learningPlan.findUnique({
        where: {
            id: parseInt(planId)
        }
      });
  
      if (learningplan) {
        return res.status(201).json({
          success: true,
          message: "Successfully got learning plan",
          learningplan,
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Unable to get learning plan",
        });
      }
    } catch (error) {
      console.log("Error with getting learning plan", error);
      return res.status(500).json({
        success: false,
        message: "There has been a server error",
        error,
      });
    }
  }
