import { Request, Response } from "express";
import UserService from "../services/UserService";
import User from "../models/User";
import { database } from "../services/database";

class UserController {

    private userService: UserService;

    constructor()
    {
        this.userService = new UserService();
    }

    public async addUser(req: Request, res: Response)
    {
        const user_req: User = req.body;

        if(!user_req.email || !user_req.name || !user_req.password)
        {
            return res.status(422).json({
                message: "Add all fields to complete registration!",
                statusCode: 422
            })
        }

        const checkIsNotEmail = await database.users.findUnique({
            where: {
                email: user_req.email
            }
        })

        if(checkIsNotEmail)
        {
            return res.status(202).json({
                message: "This email is already in the system!",
                statusCode: 202
            });
        }

        const user_obj = this.userService.addUser(user_req);

        if(typeof user_obj === "object")
        {
            return res.status(200).json({
                message: "User registeref successfully!",
                statusCode: 200
            });
        }

    }


    public async getUsers(req: Request, res: Response)
    {
        
    }
}

export default UserController;