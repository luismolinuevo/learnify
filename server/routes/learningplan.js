import { Router } from "express";
import * as learningplanControllers from "../controllers/learningplan.js";

const router = Router();

router.post("/generatelearningplan", learningplanControllers.generateLearningPlan);
router.post("/learningplan", learningplanControllers.createLearningPlan);
router.get("/learningplan/:planId", learningplanControllers.getLearningPlan);
router.get("/learningplans/", learningplanControllers.getLearningPlans);

export default router;
