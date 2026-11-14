import { Router } from "express";

const router = Router({ mergeParams: true });

// Get the budget for a project
router.get("/", (req, res) => {
  res.json({
    message: "Budget API - Get project budget",
    projectId: req.params.projectId,
  });
});

// Get materials for a project
router.get("/materials", (req, res) => {
  res.json({
    message: "Budget API - Get project materials",
    projectId: req.params.projectId,
  });
});

/* TODO:
  - Connect budgets and materials to Supabase
  - Retrieve the budget for a specific project
  - Create and update project budgets
  - Add, edit, and delete project materials
  - Store material names, quantities, and unit costs
  - Calculate estimated material costs
  - Calculate total project costs
  - Compare estimated costs against project budget
  - Add authentication and authorization
  - Add input validation and error handling
*/

export default router;
