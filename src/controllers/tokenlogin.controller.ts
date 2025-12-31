import { Request, Response } from "express";
import { loginWithToken } from "../services/auth.service";

export function tokenLoginController(req: Request, res: Response) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token" });

    const user = loginWithToken(token);
    res.json({ user });
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
}