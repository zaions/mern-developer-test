import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

const connectToDBAndStartServer = async () => {
	try {
		const mongoClient = await MongoClient.connect('DB_CONNECT_STRING');

		const db = mongoClient.db('DB_NAME');

		console.log('Connected to MongoDB');

		app.listen(PORT, () => {
			console.log(`Server is listening on port ${PORT}`);
		});
	} catch (error) {
		console.error(error);
	}
};

connectToDBAndStartServer()