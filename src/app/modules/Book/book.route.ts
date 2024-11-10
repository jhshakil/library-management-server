import { Router } from "express";
import { BookControllers } from "./book.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { BookValidationSchemas } from "./book.validation";

const router = Router();

router.post(
  "/",
  validateRequest(BookValidationSchemas.createBookSchema),
  BookControllers.createBook
);
router.get("/", BookControllers.getAllBook);
router.get("/:bookId", BookControllers.getBookById);
router.patch(
  "/:bookId",
  validateRequest(BookValidationSchemas.updateBookSchema),
  BookControllers.updateBook
);
router.delete("/:bookId", BookControllers.deleteBook);

export const BookRouters = router;
