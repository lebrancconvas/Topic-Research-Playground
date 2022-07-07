import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/test', (req: Request, res: Response) => {
	res.send('Test');
});

export default router;