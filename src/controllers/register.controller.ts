import { Request, Response } from "express";
import { register } from "../services/auth.service";

export function registerController(req: Request, res: Response) {
  try {
    const result = register(req.body);
    return res.json(result);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
}