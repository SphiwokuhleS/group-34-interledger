import express from 'express';
import cookieParser from 'cookie-parser';
import UserRouter from './routes/user-router.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Add APIs
app.use('/api', UserRouter);

// Export express instance
export default app;