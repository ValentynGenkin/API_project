import connectDB from './db/connectDB.js';
import app from './app.js';

const PORT = process.env.SERVER_URL || 5000;

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

startServer();
