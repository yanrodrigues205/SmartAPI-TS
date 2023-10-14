import User from "../models/User";
import { hash } from "bcryptjs";
import { database } from "./database";

class UserService {

    public async addUser(user: User)
    {
        try
        {
            const hashPassword = await hash(user.password, 8);

            if(hashPassword)
            {
                const create_user = await database.users.create({
                    data: {
                        name: user.name,
                        email: user.email,
                        password: hashPassword
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

                if(create_user)
                {
                    return create_user;
                }
            }

            return false;
        }
        catch(err)
        {
            return err;
        }
       
    }


    public async getUsers()
    {
        try
        {
            const users = await database.users.findMany();

            if(!users)
            {
                return false;
            }

            return users;
        }
        catch(err)
        {
            return err;
        }
        
    }


    public async getUniqueUser(id_user: string)
    {
        try
        {
            const user = await database.users.findUnique({
                where: {
                    id: id_user
                },
                select:
                {
                    id: true,
                    name: true,
                    email: true,
                    password: true,
                    create: true,
                    updated: true
                }
            });


            if(!user)
            {
                return false;
            }
            else
            {
                return user;
            }


        }
        catch(err)
        {
            return err;
        }
    }
}

export default UserService;