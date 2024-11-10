import { Response } from "express";
import { StatusCodes } from "http-status-codes";

type TResponse<T> = {
  success?: boolean;
  status?: number;
  message?: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const { success = true, status = StatusCodes.OK, message } = data;
  res.status(status).json({
    success,
    status,
    message,
    data: data.data,
  });
};

export default sendResponse;
