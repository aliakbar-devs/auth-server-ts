import { User } from "../entities/User";
import { readUsersFile } from "../data/file.read";
import { withUsers } from "./withUsers";

export const userRepository = {
  findByEmail(email: string): User | undefined {
    return readUsersFile().find(u => u.email === email);
  },

  findById(id: number): User | undefined {
    return readUsersFile().find(u => u.id === id);
  },

  create(email: string, password: string): User {
    return withUsers(users => {
      const user: User = { id: Date.now(), email, password };
      users.push(user);
      return user;
    });
  },

  updateToken(id: number, token?: string): User | undefined {
    return withUsers(users => {
      const user = users.find(u => u.id === id);
      if (!user) return undefined;
      user.token = token;
      return user;
    });
  },

  deleteById(id: number): boolean {
    return withUsers(users => {
      const index = users.findIndex(u => u.id === id);
      if (index === -1) return false;
      users.splice(index, 1);
      return true;
    });
  },
};
