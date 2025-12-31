import { validateBody } from "./validateBody";
import { emailRule, passwordRule } from "./auth.rules";

export function validateRegisterInput(body: unknown) {
  validateBody(body);

  const { email, password } = body as any;

  emailRule(email);
  passwordRule(password, 6);
}

export function validateLoginInput(body: unknown) {
  validateBody(body);

  const { email, password } = body as any;

  emailRule(email);
  passwordRule(password, 1);
}