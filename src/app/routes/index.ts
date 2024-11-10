import { Router } from "express";
import { BookRouters } from "../modules/Book/book.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
