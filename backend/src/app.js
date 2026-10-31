
import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
    ],
  })
);

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend is running',
  });
});

// Add future YardWise API routes here.

export default app;
