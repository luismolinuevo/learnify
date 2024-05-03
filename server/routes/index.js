import { Router } from "express";

import learningplanRoutes from "./learningplan.js";
import levelRoutes from "./levels.js"

const apiRouter = Router();

apiRouter.use(learningplanRoutes);
apiRouter.use(levelRoutes)

export { apiRouter };
