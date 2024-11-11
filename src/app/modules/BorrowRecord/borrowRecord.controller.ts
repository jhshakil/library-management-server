import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BorrowRecordServices } from "./borrowRecord.service";

const createBorrowRecord = catchAsync(async (req, res) => {
  const result = await BorrowRecordServices.createBorrowRecord(req.body);

  sendResponse(res, {
    message: "Book borrowed successfully",
    data: {
      borrowId: result.borrowId,
      bookId: result.bookId,
      memberId: result.memberId,
      borrowDate: result.borrowDate,
    },
  });
});

const returnBook = catchAsync(async (req, res) => {
  await BorrowRecordServices.returnBook(req.body);

  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Book returned successfully",
  });
});

const overdueBorrow = catchAsync(async (req, res) => {
  const result = await BorrowRecordServices.overdueBorrow();

  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: result?.length
      ? "Overdue borrow list fetched"
      : "No overdue books",
    data: result,
  });
});

export const BorrowRecordControllers = {
  createBorrowRecord,
  returnBook,
  overdueBorrow,
};
