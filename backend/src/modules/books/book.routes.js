import express from "express";
import validateRequest from "../../middleware/validateRequest.js";
import { BookValidations } from "./books.validation.js";
import { BookController } from "./books.controllers.js";
import auth from "../../middleware/auth.js";

const router= express.Router();

router.post("/create-book",validateRequest(BookValidations.createBookValidationSchema), auth('admin'),BookController.createBook);
router.get("/", BookController.getAllBooks);
router.get("/:id", BookController.getBookById);


const bookRoutes = router;
export default bookRoutes;