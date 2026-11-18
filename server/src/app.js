import express from "express";
import cors from "cors";

import plantRoutes from "../routes/PlantAPI.js";
import weatherRoutes from "../routes/WeatherAPI.js";
import propertiesRoutes from "../routes/PropertiesAPI.js";
import projectsRoutes from "../routes/ProjectsAPI.js";
import tasksRoutes from "../routes/TasksAPI.js";
import budgetRoutes from "../routes/BudgetAPI.js";
import remindersRoutes from "../routes/RemindersAPI.js";
import authRoutes from "../routes/AuthAPI.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
  })
);

app.use(express.json());

// API Routes
app.use("/api/plants", plantRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/properties", propertiesRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/projects/:projectId/tasks", tasksRoutes);
app.use("/api/projects/:projectId/budget", budgetRoutes);
app.use("/api/reminders", remindersRoutes);
app.use("/api/auth", authRoutes);

// Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running",
  });
});

/* TODO:
  - Add authentication API routes
  - Add authentication and authorization middleware
  - Connect API routes to Supabase
  - Add input validation
  - Add centralized error handling
*/

export default app;

