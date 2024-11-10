import { z } from "zod";

const createBorrowRecordSchema = z.object({
  body: z.object({
    bookId: z.string(),
    memberId: z.string(),
  }),
});

const returnBorrowRecordSchema = z.object({
  body: z.object({
    borrowId: z.string(),
  }),
});

export const BorrowRecordValidationSchema = {
  createBorrowRecordSchema,
  returnBorrowRecordSchema,
};
