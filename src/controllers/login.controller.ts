import { Request, Response } from "express";
import { login } from "../services/auth.service";

export function loginController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const result = login(email, password);
    res.json(result);
  } catch (e: any) {
    res.status(400).json({ message: e.message });
  }
}