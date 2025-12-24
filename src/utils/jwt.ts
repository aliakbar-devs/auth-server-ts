import jwt from "jsonwebtoken";

const SECRET = "DEV_SECRET";

export function signAccessToken(payload: object) {
  return jwt.sign(payload, SECRET);
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, SECRET);
}