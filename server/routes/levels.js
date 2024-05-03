import { Router } from "express";
import * as levelsControllers from "../controllers/levels.js";

const router = Router();

router.post("/levels/:planId", levelsControllers.createLevels);
router.get("/levels/:planId", levelsControllers.getLevels);

export default router;