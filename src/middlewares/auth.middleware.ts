 import { Request, Response, NextFunction } from "express";
 import { verifyAccessToken } from "../utils/jwt";

 export function authenticate(req: Request, res: Response, next: NextFunction) {
   const header = req.headers.authorization;
   if (!header) return res.status(401).json({ message: "No token" });

   const parts = header.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer")
    return res.status(401).json({ message: "Invalid token format" });

   try {
     const payload: any = verifyAccessToken(parts[1]);
    (req as any).user = payload;
     next();
   } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
 }
