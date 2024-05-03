import { Router } from "express";
import * as levelsControllers from "../controllers/levels.js";

const router = Router();

router.post("/levels", levelsControllers.createLevels);
router.get("/levels", levelsControllers.getLevels);

export default router;