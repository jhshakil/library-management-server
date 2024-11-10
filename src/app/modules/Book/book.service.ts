import { Book } from "@prisma/client";
import { prisma } from "../../utils/prisma";

const createBook = async (data: Book) => {
  const result = await prisma.book.create({
    data,
  });

  return result;
};

const getAllBook = async () => {
  const result = await prisma.book.findMany();

  return result;
};

const getBookById = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  return result;
};

const updateBook = async (bookId: string, data: Partial<Book>) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });

  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data,
  });

  return result;
};

const deleteBook = async (bookId: string) => {
  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });

  return result;
};

export const BookServices = {
  createBook,
  getAllBook,
  getBookById,
  updateBook,
  deleteBook,
};
