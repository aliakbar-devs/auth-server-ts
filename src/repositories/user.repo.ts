
//   async updateToken(id: number, token: string): Promise<User | undefined> {
//     const users = readJsonFile();
//     const user = users.find(u => u.id === id);
//     if (!user) return undefined;
//     user.token = token;
//     writeJsonFile(users);
//     return user;
//   },
//   async removeToken(id: number): Promise<User | undefined> {
//   const users = readJsonFile();
//   const user = users.find(u => u.id === id);
//   if (!user) return undefined;

//   delete user.token; // توکن حذف شد
//   writeJsonFile(users);
//   return user;
// }

// };
// import { readJsonFile, writeJsonFile } from "../data/file.util";
// import { User } from "../entities/User";

// function withUsers<T>(fn: (users: User[]) => T): T {
//   const users = readJsonFile() as User[];
//   const result = fn(users);
//   writeJsonFile(users);
//   return result;
// }

// export const userRepository = {
//   findByEmail(email: string): User | undefined {
//     const users = readJsonFile() as User[];
//     return users.find(u => u.email === email);
//   },

//   findById(id: number): User | undefined {
//     const users = readJsonFile() as User[];
//     return users.find(u => u.id === id);
//   },

//   create(email: string, password: string): User {
//     return withUsers(users => {
//       const user: User = {
//         id: Date.now(),
//         email,
//         password,
//       };
//       users.push(user);
//       return user;
//     });
//   },

//   updateToken(id: number, token?: string): User | undefined {
//     return withUsers(users => {
//       const user = users.find(u => u.id === id);
//       if (!user) return undefined;
//       user.token = token;
//       return user;
//     });
//   },
// };
////////



  // findAll(): User[] {
  //   return readJsonFile();
  // },

  // create(data: { email: string; password: string }): User {
  //   const users = readJsonFile();

  //   const user: User = {
  //     id: Date.now(),
  //     ...data,
  //   };

  //   users.push(user);
  //   writeJsonFile(users);

  //   return user;
  
 ////////////////////////////////////////////////////////////////////

//  import { User } from "../entities/User";
// import { readUsersFile } from "../data/file.read";
// import { withUsers } from "./withUsers";

// export const userRepository = {
//   findByEmail(email: string): User | undefined {
//     return readUsersFile().find(u => u.email === email);
//   },

//   findById(id: number): User | undefined {
//     return readUsersFile().find(u => u.id === id);
//   },

//   create(email: string, password: string): User {
//     return withUsers(users => {
//       const user: User = { id: Date.now(), email, password };
//       users.push(user);
//       return user;
//     });
//   },

//   updateToken(id: number, token?: string): User | undefined {
//     return withUsers(users => {
//       const user = users.find(u => u.id === id);
//       if (!user) return;
//       user.token = token;
//       return user;
//     });
//   },

// async deleteById(id: number): Promise<boolean> {
//   return withUsers(users => {
//     const index = users.findIndex(u => u.id === id);
//     if (index === -1) return false;

//     users.splice(index, 1);
//     return true;
//   });
// }
// };
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
