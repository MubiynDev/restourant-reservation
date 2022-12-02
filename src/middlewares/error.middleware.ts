import ErrorCode from "@/enums/error-code.enum";
import StatusCode from "@/enums/status-code.enum";
import { NextFunction, Request, Response } from "express";

export const errorResponder = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.StatusCode) {
    console.log(error)
    res.status(error.statusCode).render("error", {
      status: error.StatusCode,
      code: error.code,
      message: error.message
    })
  } else {
    console.log(error)

    res.status(StatusCode.BadRequest).render("error",{
      status: StatusCode.BadRequest,
      code: ErrorCode.SomethingWentWrong,
      message: error.message,
    });
  }
};
