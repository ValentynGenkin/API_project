import express from 'express';
import authRouter from './routes/auth.js';
import cookieParser from 'cookie-parser';
import schemaRouter from './routes/schema.js';
import usersRouter from './routes/usersRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const origin =
  process.env.NODE_ENV === 'production'
    ? 'https://api-creator-49b94993b404.herokuapp.com'
    : 'http://localhost:3000';

app.use(cors({ origin, credentials: true }));
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/schema', schemaRouter);
app.use('/api/custom-rout', usersRouter);

// app.use('/api/admin');

export default app;
