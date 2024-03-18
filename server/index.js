import connectDB from './db/connectDB.js';
import app from './app.js';
import express from 'express';

const PORT = process.env.PORT || 5000;

if (PORT === null) {
  console.error('Server port Error');
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(new URL('../client/build', import.meta.url).pathname));
  app.get('*', (req, res) =>
    res.sendFile(
      new URL('../client/build/index.html', import.meta.url).pathname,
    ),
  );
}

startServer();
