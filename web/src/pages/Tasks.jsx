
import { useParams } from "react-router-dom";

export default function Tasks() {
  const { projectId } = useParams();

  return (
    <div>
      <h1>Project Tasks</h1>
      <p>Manage tasks and track progress for project {projectId}.</p>

      {/* TODO:
        - Display project task checklists
        - Add, edit, delete, and reorder tasks
        - Mark tasks as complete or incomplete
        - Assign due dates to tasks
        - Set recurring maintenance tasks
        - View upcoming and overdue tasks
        - Calculate and display project progress
        - Connect project tasks to Supabase
      */}
    </div>
  );
}
