import { Router, Request, Response } from "express";

import UserController from "./controllers/UserController";


export const routes = Router();
const userController = new UserController();


//USER ROUTES
routes.get("/", (req:Request, res:Response) => {
    res.send("<h1>Lenadro cachorro</h1>")
});
routes.post("/create-user", (req, res) => {    userController.addUser(req, res);   });
routes.get("/get-users", (req, res) => { userController.getUsers(res);  });
routes.get("/get-unique-user", (req, res ) => { userController.getUniqueUser(req, res); }); 