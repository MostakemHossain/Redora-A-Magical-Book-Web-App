import express from "express";
import validateRequest from "../../middleware/validateRequest.js";
import { UserValidations } from "./user.validation.js";
import { UserController } from "./user.controller.js";

const router = express.Router();

router.post(
  "/register",
  validateRequest(UserValidations.createUserValidationSchema),
  UserController.createUser
);

router.get("/", UserController.getAllUsers);
router.delete("/:id", UserController.deleteUser);

const userRoutes = router;
export default userRoutes;
