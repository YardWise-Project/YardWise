import { Router } from "express";

const router = Router();

// Get weather by location
router.get("/", (req, res) => {
  const { zip } = req.query;

  res.json({
    message: "Get local weather",
    zip: zip || null,
  });
});

// Get weather forecast
router.get("/forecast", (req, res) => {
  const { zip } = req.query;

  res.json({
    message: "Get forecast",
    zip: zip || null,
  });
});

/* TODO:
  - Connect to an external weather API
  - Retrieve weather using property ZIP code
  - Display current weather conditions
  - Retrieve a 10-day weather forecast
  - Provide weather-related gardening alerts
  - Handle invalid locations and API errors
  - Add weather data caching
*/

export default router;
