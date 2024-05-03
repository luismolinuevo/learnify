import { Router } from "express";
import * as learningplanControllers from "../controllers/learningplan.js";

const router = Router();

router.post("/learningplan", learningplanControllers.generateLearningPlan);

export default router;
