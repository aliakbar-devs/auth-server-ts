import { Request, Response } from "express";
import { userRepository } from "../repositories/user.repo";

export function logoutController(req: Request, res: Response) {
  try {
   
    const userId = (req as any).user.userId;

    const deleted = userRepository.deleteById(userId);

    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Logout successful, user deleted",
    });
  } catch (error) {
    return res.status(500).json({ message: "Logout failed" });
  }
}