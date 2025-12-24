import { readUsersFile } from "../data/file.read";
import { writeUsersFile } from "../data/file.write";
import { User } from "../entities/User";

export function withUsers<T>(fn: (users: User[]) => T): T {
  const users = readUsersFile() as User[];
  const result = fn(users);
  writeUsersFile(users);
  return result;
}