import {createBrowserRouter,RouterProvider} from "react-router-dom";

import RootLayout from "../components/layout/RootLayout.jsx";
import Home from "../pages/Home.jsx";
import Auth from "../features/auth/Auth.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Properties from "../pages/Properties.jsx";
import Projects from "../pages/Projects.jsx";
import ProjectDetails from "../pages/ProjectDetails.jsx";
import Recommendations from "../pages/Recommendations.jsx";
import Plants from "../pages/Plants.jsx";
import Budget from "../pages/Budget.jsx";
import Tasks from "../pages/Tasks.jsx";
import Reminders from "../pages/Reminders.jsx";
import Settings from "../pages/Settings.jsx";
import NotFound from "../components/NotFound.jsx";

/*AppRouter.jsx — Defines the URLs and components.*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Auth /> },
        { path: "register", element: <Auth /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "reminders", element: <Reminders /> },
        { path: "settings", element: <Settings /> },
        { path: "projects", element: <Projects /> },
        { path: "projects/:projectId", element: <ProjectDetails /> },
        { path: "projects/:projectId/budget", element: <Budget /> },
        { path: "projects/:projectId/tasks", element: <Tasks /> },
        { path: "recommendations", element: <Recommendations /> },
        { path: "plants", element: <Plants /> },
        { path: "properties", element: <Properties /> },
        { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
