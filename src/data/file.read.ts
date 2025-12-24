import fs from "fs";
import { USERS_FILE_PATH } from "./file.path";
import { ensureUsersFile } from "./file.ensure";

export function readUsersFile(): any[] {
  ensureUsersFile();
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE_PATH, "utf-8"));
  } catch {
    return [];
  }
}