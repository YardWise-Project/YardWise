
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = Number(process.env.PORT) || 8000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174'
  ]
}));

app.use(express.json());

// Basic health check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'YardWise backend is running'
  });
});

/*
 * TODO: Implement YardWise backend features
 *
 * - Authentication middleware (Supabase Auth)
 * - User profile endpoints
 * - Property management endpoints
 * - Garden management endpoints
 * - Plant information endpoints
 * - Landscaping project endpoints
 * - Budget tracking endpoints
 * - Reminder endpoints
 * - Error handling
 */

app.listen(PORT, () => {
  console.log(`YardWise backend running at http://localhost:${PORT}`);
});
