import { userRepository } from "../repositories/user.repo";
import { signAccessToken, verifyAccessToken } from "../utils/jwt";

export function register(email: string, password: string) {
  const exists = userRepository.findByEmail(email);
  if (exists) throw new Error("User already exists");

  const user = userRepository.create(email, password);
  const token = signAccessToken({ userId: user.id });

  userRepository.updateToken(user.id, token);

  return { user, token };
}

export function login(email: string, password: string) {
  const user = userRepository.findByEmail(email);
  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  const token = signAccessToken({ userId: user.id });
  userRepository.updateToken(user.id, token);

  return { user, token };
}

export async function loginWithToken(token: string) {
  const payload: any = verifyAccessToken(token);

  const user =  userRepository.findById(payload.userId);
  if (!user || user.token !== token)
    throw new Error("Invalid token");

  return user;
}

export async function logout(token: string) {
  const payload: any = verifyAccessToken(token);

  const user = userRepository.findById(payload.userId);
  if (!user || user.token !== token)
    throw new Error("Invalid token");

  const deleted = userRepository.deleteById(user.id);
  if (!deleted) throw new Error("User not found");

  return true;
}