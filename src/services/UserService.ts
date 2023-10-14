import User from "../models/User";
import { hash } from "bcryptjs";
import { database } from "./database";

class UserService {

    public async addUser(user: User)
    {
        const hashSenha = await hash(user.password, 8);

        const create_user = await database.users.create({
            data: {
                name: user.name,
                email: user.email,
                password: hashSenha
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                create: true,
                updated: true
            }
        });

        return create_user;
    }
}

export default UserService;