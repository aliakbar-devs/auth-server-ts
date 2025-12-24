import fs from "fs";
import { USERS_FILE_PATH } from "./file.path";

export function ensureUsersFile() {
  if (!fs.existsSync(USERS_FILE_PATH)) {
    fs.writeFileSync(USERS_FILE_PATH, "[]", "utf-8");
  }
}