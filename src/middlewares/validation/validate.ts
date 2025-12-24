
import { Request, Response, NextFunction } from "express";
import { validateBody } from "./validateBody";
import { emailRule, passwordRule } from "./auth.rules";

export function validateRegister(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    validateBody(req.body);

    const { email, password } = req.body;

    emailRule(email);
    passwordRule(password, 6);

    next();
  } catch (err: any) {
    return res.status(400).json({
      message: "Validation failed",
      error: err.message,
    });
  }
}

export function validateLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    validateBody(req.body);

    const { email, password } = req.body;

    emailRule(email);
    passwordRule(password, 1);

    next();
  } catch (err: any) {
    return res.status(400).json({
      message: "Validation failed",
      error: err.message,
    });
  }
}