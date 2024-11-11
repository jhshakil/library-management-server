import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../utils/prisma";
import { CompareTodayDate } from "../../utils/compareDate";

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

const overdueBorrow = async () => {
  const result = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
    },
    include: {
      book: true,
      member: true,
    },
  });

  const overdueRecords = result
    .filter((item) => {
      return CompareTodayDate(item.borrowDate) > 14; // Filter items where differenceInDays is greater than 14
    })
    .map((item) => {
      const daysBeyond14 = CompareTodayDate(item.borrowDate) - 14;

      // Return the desired data format
      return {
        borrowId: item.borrowId,
        bookTitle: item.book.title,
        borrowerName: item.member.name,
        overdueDays: daysBeyond14,
      };
    });

  return overdueRecords;
};

export const BorrowRecordServices = {
  createBorrowRecord,
  returnBook,
  overdueBorrow,
};
