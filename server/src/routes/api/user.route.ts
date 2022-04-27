import { Router, Request, Response } from "express";

const router: Router = Router();

router.post(
    '/register',
    async(_:Request, res: Response) => {
        res.send('registration logic there')
    })
export default router