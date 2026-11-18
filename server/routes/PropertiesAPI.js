import { Router } from "express";

const router = Router();

// Get all properties
router.get("/", (_req, res) => {
  res.json({
    message: "Get all properties",
  });
});

// Get a specific property
router.get("/:propertyId", (req, res) => {
  res.json({
    message: "Get property details",
    propertyId: req.params.propertyId,
  });
});

/* TODO:
  - Connect properties to Supabase
  - Retrieve properties belonging to the logged-in user
  - Create new properties
  - Update existing properties
  - Delete properties
  - Store property name, ZIP code, and yard size
  - Store soil type, sunlight, and landscaping goals
  - Add authentication and authorization
  - Add input validation and error handling
*/

export default router;
