import { Router } from "express";
import { BookControllers } from "./book.controller";

const router = Router();

router.post("/", BookControllers.createBook);

export const BookRouters = router;
