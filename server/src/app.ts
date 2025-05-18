import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRouters';
import authenticateToken from './middlewares/authMiddleware';

const app = express();

app.use(express.json());

app.use('/api/users', authenticateToken, userRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;
