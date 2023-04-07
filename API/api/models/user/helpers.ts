import { User } from "./user";
import { database } from "../../config/database";
export namespace UserHelper {
  export const getAllUsers = (): Array<User> => {
    return database.prepare("SELECT * FROM User").all() as Array<User>;
  };
  export const createUser = (name: string): void => {
    database.prepare("INSERT INTO User(name) VALUES(?)").run([name]);
  };
}
