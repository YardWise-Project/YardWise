import { Router } from "express";

const router = Router({ mergeParams: true });

// Get all tasks for a project
router.get("/", (req, res) => {
  res.json({
    message: "Get project tasks",
    projectId: req.params.projectId,
  });
});

// Get a specific task
router.get("/:taskId", (req, res) => {
  res.json({
    message: "Get task details",
    projectId: req.params.projectId,
    taskId: req.params.taskId,
  });
});

/* TODO:
  - Connect tasks to Supabase
  - Retrieve tasks for a specific project
  - Create, edit, and delete tasks
  - Mark tasks as complete or incomplete
  - Assign task due dates
  - Support recurring maintenance tasks
  - Calculate project progress
  - Add authentication and authorization
  - Add input validation and error handling
*/

export default router;
