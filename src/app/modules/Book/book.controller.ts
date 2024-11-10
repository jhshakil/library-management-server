import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBook(req.body);

  sendResponse(res, {
    message: "Book created successfully",
    data: result,
  });
});

const getAllBook = catchAsync(async (req, res) => {
  const result = await BookServices.getAllBook();

  sendResponse(res, {
    message: "Books retrieved successfully",
    data: result,
  });
});

const getBookById = catchAsync(async (req, res) => {
  const result = await BookServices.getBookById(req.params.bookId);

  sendResponse(res, {
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateBook = catchAsync(async (req, res) => {
  const result = await BookServices.updateBook(req.params.bookId, req.body);

  sendResponse(res, {
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBook = catchAsync(async (req, res) => {
  const result = await BookServices.deleteBook(req.params.bookId);

  sendResponse(res, {
    message: "Book successfully deleted",
    data: result,
  });
});

export const BookControllers = {
  createBook,
  getAllBook,
  getBookById,
  updateBook,
  deleteBook,
};
