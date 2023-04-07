import { User } from "../models/user/user";
import { UserHelper } from "../models/user/helpers";
export namespace UserService {
  export const getAllUsers = (): Array<User> => {
    return UserHelper.getAllUsers();
  };
  export const createUser = (name: string): void => {
    UserHelper.createUser(name);
  };
}
