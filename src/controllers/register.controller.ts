import { Request, Response } from "express";
import { register } from "../services/auth.service";
export function registerController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    res.json(register(email, password));
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
}