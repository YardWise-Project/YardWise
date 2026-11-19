import Weather from "../components/Weather.jsx";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your YardWise dashboard.</p>

    {/* TODO: 
      - Display user's properties
      - Display active projects
      - Display upcoming tasks
      - Display weather information
      
    */}

      <Weather />
    </div>
  );
}

