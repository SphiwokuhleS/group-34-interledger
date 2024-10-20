import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getManager } from 'typeorm';
import { User } from '../database/entities/user.js';

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    try {
        const users = await getManager()
            .getRepository(User)
            .createQueryBuilder('user')
            .getMany();
        
        return res.status(StatusCodes.OK).json({ users });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Error fetching users' });
    }
});

export default router;