import { Router } from "express";

import learningplanRoutes from "./learningplan"

const apiRouter = Router();

apiRouter.use(dreamRoutes);
apiRouter.use(openaiRoutes);

export {apiRouter};