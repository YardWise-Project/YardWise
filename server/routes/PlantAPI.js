import { Router } from "express";

const router = Router();

// Get all plants
router.get("/", (_req, res) => {
  res.json({
    message: "Plant API - Get all plants",
  });
});

// Get a specific plant
router.get("/:plantId", (req, res) => {
  res.json({
    message: "Plant API - Get plant details",
    plantId: req.params.plantId,
  });
});

/* TODO:
  - Connect to plant database or external plant API
  - Search plants by name
  - Filter plants by sunlight, water, and maintenance needs
  - Retrieve detailed plant information
  - Add pagination for plant results
  - Add error handling
*/

export default router;
