import express from 'express';
import itemRoutes from './routes/itemRoutes';
import { errorHandler } from './middlewares/errorHandler';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

export default app;
