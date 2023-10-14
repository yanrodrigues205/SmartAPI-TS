import { Router } from "express";
import UserController from "./controllers/UserController";


export const routes = Router();
const userController = new UserController();


routes.post("/create-user", (req, res) => {
    try
    {
        userController.addUser(req, res);
    }
    catch(error)
    {
        res.status(500).json({
            message: "Error adding user!",
            statusCode: 500
        });
    }
    
});