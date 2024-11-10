import { Router } from "express";
import { BookRouters } from "../modules/Book/book.route";
import { MemberRouters } from "../modules/Member/member.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRouters,
  },
  {
    path: "/members",
    route: MemberRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
