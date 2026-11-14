import { Router } from "express";

const router = Router();

// Get the currently authenticated user
router.get("/me", (_req, res) => {
  res.json({
    message: "Get current user",
  });
});

// Get the current user's profile
router.get("/profile", (_req, res) => {
  res.json({
    message: "Get user profile",
  });
});

/* TODO:
  - Connect authentication to Supabase Auth
  - Verify user access tokens
  - Retrieve the currently authenticated user
  - Retrieve and update user profiles
  - Protect routes that require authentication
  - Ensure users can only access their own data
  - Handle expired or invalid sessions
  - Add input validation and error handling

  - Coordinate login, registration, and logout
    with the frontend Supabase Auth implementation
*/

export default router;
