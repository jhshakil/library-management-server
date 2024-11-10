import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBook();

  sendResponse(res, {
    message: "Book created successfully",
    data: result,
  });
});

export const BookControllers = {
  createBook,
};
