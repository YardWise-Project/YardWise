import { Link, NavLink } from "react-router-dom";

/**
 * Shared navigation across all pages.
 * Displays different links based on login status.
 */

export default function Navbar({ isLoggedIn = false }) {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        YardWise
      </Link>

      <nav className="navbar-links" aria-label="main">
        <NavLink to="/" end>Home</NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/properties">Properties</NavLink>
            <NavLink to="/recommendations">Recommendations</NavLink>
            <NavLink to="/plants">Plants</NavLink>
            <NavLink to="/reminders">Reminders</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Sign Up</NavLink>
          </>
        )}
      </nav>

      {/* TODO:
        - Connect login status to Supabase Auth
        - Display navigation based on authentication status
        - Add logout functionality
        - Add responsive mobile navigation
      */}
    </header>
  );
}
