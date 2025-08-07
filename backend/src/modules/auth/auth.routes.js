import express from "express";
import validateRequest from "../../middleware/validateRequest.js";
import { AuthController } from "./auth.controller.js";

import { AuthValidation } from "./auth.validation.js";
const router= express.Router();
router.post("/login", validateRequest(AuthValidation.loginUserValidationSchema),AuthController.loginUser);

const authRoutes = router;
export default authRoutes;