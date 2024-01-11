import { Router } from "express";

export const router = Router();

type User = {
    id: string,
    name: string,
}

router.get('/', (req, res) => {
    res.send('hola mundo');
})

router.post('/', (req, res) => {
    // assing body to type Uer
    const { name } = req.body as User;
    console.log("🚀 ~ app.post ~ name:", name);
    res.send('ok');
})
