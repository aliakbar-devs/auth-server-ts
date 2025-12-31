import { Request, Response } from "express";
import { logout } from "../services/auth.service";

export function logoutController(req: Request, res: Response) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.status(401).json({ message: "No token provided" });

    logout(token);

    return res.json({ message: "Logout successful" });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
}