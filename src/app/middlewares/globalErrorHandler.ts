import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({
    success: false,
    status: 500,
    message: err.message || "Something went wrong",
    error: err,
  });

  next();
};
