import 'dotenv/config';
import app from './app.js';

const PORT = Number(process.env.PORT) || 8000;

app.listen(PORT, () => {
  console.log(
    `YardWise backend running at http://localhost:${PORT}`
  );
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
