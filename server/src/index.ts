import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase } from './config/db';
import astrologersRouter from './routes/astrologers';

dotenv.config();

const app = express();

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] }));
app.use(express.json({ limit: '1mb' }));

app.get('/health', (_req, res) => res.json({ ok: true }));

app.use('/api/astrologers', astrologersRouter);

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || '';

(async () => {
  try {
    await connectToDatabase(mongoUri);
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server:', err);
    process.exit(1);
  }
})(); 