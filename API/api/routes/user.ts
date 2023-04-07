import { Request, Response } from "express";
import { UserService } from "../services/user";
const route = require("express").Router();

route.get("/", (req: Request, res: Response) => {
  const pokemons = UserService.getAllUsers();
  res.send(pokemons);
});
route.post("/create", (req: Request, res: Response) => {
  const { name } = req.body;
  UserService.createUser(name);
  res.sendStatus(201);
});

export default route;
