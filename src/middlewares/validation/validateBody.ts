
export function validateBody(body: any): void {
  if (!body || typeof body !== "object") {
    throw new Error("داده‌ای ارسال نشده است");
  }
}