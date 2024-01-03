import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth');
app.use('/api/collection');
app.use('/api/admin');

export default app;
