import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { BorrowRecordValidationSchema } from "./borrowRecord.validation";
import { BorrowRecordControllers } from "./borrowRecord.controller";

const router = Router();

router.post(
  "/borrow",
  validateRequest(BorrowRecordValidationSchema.createBorrowRecordSchema),
  BorrowRecordControllers.createBorrowRecord
);
router.post(
  "/return",
  validateRequest(BorrowRecordValidationSchema.returnBorrowRecordSchema),
  BorrowRecordControllers.returnBook
);

router.get("/borrow/overdue", BorrowRecordControllers.overdueBorrow);

export const BorrowRecordRouters = router;
