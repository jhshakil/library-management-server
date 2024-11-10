import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../utils/prisma";

const createBorrowRecord = async (data: BorrowRecord) => {
  const result = await prisma.borrowRecord.create({
    data,
  });

  return result;
};

const returnBook = async (data: { borrowId: string }) => {
  const result = await prisma.borrowRecord.update({
    where: {
      borrowId: data.borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });

  return result;
};

export const BorrowRecordServices = {
  createBorrowRecord,
  returnBook,
};
