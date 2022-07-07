import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes/router';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('Hello Server'); 
});

app.use(router);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});


