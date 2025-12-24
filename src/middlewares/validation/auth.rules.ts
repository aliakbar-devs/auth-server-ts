export function emailRule(email: any): void {
  if (!email || typeof email !== "string" || !email.includes("@")) {
    throw new Error("ایمیل معتبر نیست");
  }
}

export function passwordRule(password: any, min = 6): void {
  if (!password || typeof password !== "string" || password.length < min) {
    throw new Error(`رمز عبور باید حداقل ${min} کاراکتر باشد`);
  }
}