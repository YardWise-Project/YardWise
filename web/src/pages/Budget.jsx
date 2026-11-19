
import { useParams } from "react-router-dom";

export default function Budget() {
  const { projectId } = useParams();

  return (
    <div>
      <h1>Budget & Materials</h1>
      <p>Manage the budget and materials for project {projectId}.</p>

      {/* TODO:
        - Display project budget
        - Display materials in a spreadsheet-like table
        - Add materials with quantities and units
        - Enter estimated unit costs
        - Automatically calculate material costs
        - Display total estimated project cost
        - Compare estimated costs against project budget
        - Edit and remove materials
        - Save budget and materials to Supabase
      */}
      
    </div>
  );
}
