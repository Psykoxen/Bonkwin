import { Request, Response } from "express";
import { AdService } from "../services/ad";
const route = require("express").Router();

route.get("/", (req: Request, res: Response) => {
  const ads = AdService.getAllAds();
  res.send(ads);
});

route.get("/yours/:userId", (req: Request, res: Response) => {
  const id = parseInt(req.params.userId);
  const ads = AdService.getAdByUserId(id);
  res.send(ads);
});

route.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const ad = AdService.getAdById(id);
  res.send(ad);
});

route.post("/create", (req: Request, res: Response) => {
  const { title } = req.body;
  const { description } = req.body;
  const { price } = req.body.valueOf();
  const { userId } = req.body.valueOf();
  AdService.createAd(title, description, price, userId);
  res.sendStatus(201);
});

export default route;
