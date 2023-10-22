import User from "../models/User";
import { hash } from "bcryptjs";
import { database } from "./database";

class UserService {


    private async verifyEmail_S(user: User)
    {
        const checkIsNotEmail = await database.users.findUnique({
            where: {
                email: user.email
            }
        })


        return checkIsNotEmail;
    }

    protected async addUser_S(user: User)
    {
        try
        {
            const verify = await this.verifyEmail_S(user);
            if(verify)
            {
                return false;
            }

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

            return undefined;
        }
        catch(err)
        {
            return err;
        }
       
    }


    protected async getUsers_S()
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


    protected async getUniqueUser_S(id_user: string)
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