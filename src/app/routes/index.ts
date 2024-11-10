import { Router } from "express";
import { BookRouters } from "../modules/Book/book.route";
import { MemberRouters } from "../modules/Member/member.route";
import { BorrowRecordRouters } from "../modules/BorrowRecord/borrowRecord.route";

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
  {
    path: "/",
    route: BorrowRecordRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
