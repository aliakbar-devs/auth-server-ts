import { Request, Response } from "express";
import { login } from "../services/auth.service";

export function loginController(req: Request, res: Response) {
  try {
    const result = login( req.body );
    res.json(result);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
}