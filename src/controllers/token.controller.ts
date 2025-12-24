import { Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt";
import { userRepository } from "../repositories/user.repo";

export function tokenLogin(req: Request, res: Response) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: "No token" });

  const token = auth.split(" ")[1];

  try {
    const payload = verifyAccessToken(token) as { userId: number };
    const user = userRepository.findById(payload.userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json({ user });
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}