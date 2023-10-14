import { Router } from "express";
import UserController from "./controllers/UserController";


export const routes = Router();
const userController = new UserController();


//USER ROUTES
routes.post("/create-user", (req, res) => {    userController.addUser(req, res);   });