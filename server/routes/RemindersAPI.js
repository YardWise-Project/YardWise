import { Router } from "express";

const router = Router();

// Get all reminders
router.get("/", (_req, res) => {
  res.json({
    message: "Get all reminders",
  });
});

// Get a specific reminder
router.get("/:reminderId", (req, res) => {
  res.json({
    message: "Get reminder details",
    reminderId: req.params.reminderId,
  });
});

/* TODO:
  - Connect reminders to Supabase
  - Retrieve reminders for the logged-in user
  - Create, edit, and delete reminders
  - Set reminder dates and times
  - Support recurring gardening reminders
  - Track watering and seasonal maintenance
  - Add weather-related gardening alerts
  - Mark reminders as completed
  - Manage notification preferences
  - Add authentication and authorization
  - Add input validation and error handling
*/

export default router;
