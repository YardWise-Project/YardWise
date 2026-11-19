import { Router } from "express";

const router = Router();

// Get all projects
router.get("/", (_req, res) => {
  res.json({
    message: "Get all projects",
  });
});

// Get a specific project
router.get("/:projectId", (req, res) => {
  res.json({
    message: "Get project details",
    projectId: req.params.projectId,
  });
});

/* TODO:
  - Connect projects to Supabase
  - Retrieve projects belonging to the logged-in user
  - Create new landscaping projects
  - Update existing projects
  - Delete projects
  - Categorize projects using labels
  - Search and filter projects
  - Track project status and progress
  - Associate projects with properties
  - Add authentication and authorization
  - Add input validation and error handling
*/

export default router;
