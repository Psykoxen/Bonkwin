import { Ad } from "../models/ad/ad";
import { AdHelper } from "../models/ad/helpers";
export namespace AdService {
  export const getAllAds = (): Array<Ad> => {
    return AdHelper.getAllAds();
  };

  export const getAdByUserId = (id: number): Array<Ad> => {
    return AdHelper.getAdByUserId(id);
  };

  export const getAdById = (id: number): Ad => {
    return AdHelper.getAdById(id);
  };

  export const createAd = (
    title: string,
    description: string,
    price: number,
    userId: number
  ): void => {
    AdHelper.createAd(title, description, price, userId);
  };
}
