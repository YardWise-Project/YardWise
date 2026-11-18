
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { projectId } = useParams();

  return (
    <div>
      <h1>Project Details</h1>
      <p>Project ID: {projectId}</p>

      {/* TODO: 
        - Display project description, category, and status
        - View and update project budget
        - Display project progress
        - Upload and view project photos
        - Access project tasks
        - Display associated materials
        - Display plant and project recommendations
        - Fetch project data from Supabase
      */}

    </div>
  );
}
