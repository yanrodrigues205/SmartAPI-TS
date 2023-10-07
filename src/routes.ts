import { Router } from "express";

export const routes = Router();

routes.get("/", (req, res) => {
    let start: { welcome: string} = {"welcome": "yan"};
    res.send(start);
});