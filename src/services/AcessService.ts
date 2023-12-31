import { verify } from "jsonwebtoken";
import Acess from "../models/Acess";
import { database } from "./database";

class AcessService
{

    private async verifyThereIsTitle(acess: Acess)
    {
        const verify =  await database.acess.findUnique({
            where:{
                title: acess.title
            }
        });

        if(!verify)
        {
            return true;
        }
       
            return false;
        
    }

    protected async addAcess_S(acess: Acess)
    {
        try
        {
            if(!this.verifyThereIsTitle(acess))
            {
                return false;
            }

            const createAcess = await database.acess.create({
                data: {
                    title: acess.title,
                    description: acess.description
                },
                select:{
                    id: true,
                    title: true,
                    description: true,
                    create: true,
                    update: true
                }
            });

            return createAcess;
        }
        catch(err)
        {
            return err;
        }
    }


    protected async getAcess_S()
    {
        try
        {
            const acess = await database.acess.findMany();

            if(!acess)
            {
                return false;
            }

            return acess;
        }
        catch(err)
        {
            return err;
        }
    }

    protected async getUniqueAcess_S(id_acess: string)
    {
        try
        {
            const acess = await database.acess.findMany({
                where:{
                    id: id_acess
                },
                select:{
                    id: true,
                    title: true,
                    description: true,
                    create: true,
                    update: true
                }
            });

            if(!acess)
            {
                return false;
            }

            return acess;
        }
        catch(err)
        {
            return err;
        }
    }
}