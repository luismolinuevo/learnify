import { Router } from "express";

import learningplanRoutes from "./learningplan.js";

const apiRouter = Router();

apiRouter.use(learningplanRoutes);

export { apiRouter };
