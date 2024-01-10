import express from 'express';
import authRouter from './routes/auth.js';
import cookieParser from 'cookie-parser';
import schemaRouter from './routes/schema.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/schema', schemaRouter);
// app.use('/api/collection');
// app.use('/api/admin');

export default app;
