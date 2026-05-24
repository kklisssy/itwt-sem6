import { Router } from "express";

import { getRegistration } from "../controllers/registration.controller.js";

const router = Router();

router.get("/", getRegistration);

export default router;
