import { Ad } from "./ad";
import { database } from "../../config/database";
export namespace AdHelper {
  export const getAllAds = (): Array<Ad> => {
    return database.prepare("SELECT * FROM Ad").all() as Array<Ad>;
  };

  export const getAdByUserId = (id: number): Array<Ad> => {
    console.log("id: ", id);
    return database
      .prepare("SELECT * FROM Ad WHERE userId = ?")
      .all(id) as Array<Ad>;
  };

  export const getAdById = (id: number): Ad => {
    return database.prepare("SELECT * FROM Ad WHERE id = ?").get(id) as Ad;
  };

  export const createAd = (
    title: string,
    description: string,
    price: number,
    userId: number
  ): void => {
    database
      .prepare(
        "INSERT INTO Ad (title, description, price, userId) VALUES (?, ?, ?, ?)"
      )
      .run(title, description, price, userId);
  };
}
