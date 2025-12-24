import fs from "fs";
import { USERS_FILE_PATH } from "./file.path";
import { ensureUsersFile } from "./file.ensure";

export function writeUsersFile(data: any[]) {
  ensureUsersFile();
  fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
}