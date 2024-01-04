import express from 'express';
import authRouter from './routes/auth.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);
// app.use('/api/collection');
// app.use('/api/admin');

export default app;
