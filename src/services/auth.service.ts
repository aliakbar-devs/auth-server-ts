import { userRepository } from "../repositories/user.repo";
import { signAccessToken, verifyAccessToken } from "../utils/jwt";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middlewares/validation/validate";

/* ================= REGISTER ================= */

export function register(input: unknown) {
  validateRegisterInput(input);

  const { email, password } = input as any;

  const exists = userRepository.findByEmail(email);
  if (exists) throw new Error("User already exists");

  const user = userRepository.create(email, password);
  const token = signAccessToken({ userId: user.id });

  userRepository.updateToken(user.id, token);

  return { user, token };
}

/* ================= LOGIN ================= */

export function login(input: unknown) {
  validateLoginInput(input);

  const { email, password } = input as any;

  const user = userRepository.findByEmail(email);
  if (!user || user.password !== password)
    throw new Error("Invalid credentials");

  const token = signAccessToken({ userId: user.id });
  userRepository.updateToken(user.id, token);

  return { user, token };
}

/* ================= TOKEN LOGIN ================= */

export function loginWithToken(token: string) {
  if (!token) throw new Error("Token required");

  const payload: any = verifyAccessToken(token);

  const user = userRepository.findById(payload.userId);
  if (!user || user.token !== token)
    throw new Error("Invalid token");

  return user;
}

/* ================= LOGOUT ================= */

export function logout(token: string) {
  if (!token) throw new Error("Token required");

  const payload: any = verifyAccessToken(token);

  const user = userRepository.findById(payload.userId);
  if (!user || user.token !== token)
    throw new Error("Invalid token");

  const deleted = userRepository.deleteById(user.id);
  if (!deleted) throw new Error("User not found");

  return true;
}