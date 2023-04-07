import { Request, Response } from "express";
import { UserService } from "../services/user";
const route = require("express").Router();

route.get("/", (req: Request, res: Response) => {
  const users = UserService.getAllUsers();
  res.send(users);
});
route.post("/create", (req: Request, res: Response) => {
  const { email } = req.body;
  UserService.createUser(email);
  res.sendStatus(201);
});

export default route;
