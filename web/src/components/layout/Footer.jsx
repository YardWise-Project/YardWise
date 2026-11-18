import { Link } from "react-router-dom";

/* Shared footer component across all pages.*/

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>YardWise</h2>
          <p>The New Way to Design & Build Your Yard.</p>
          <p>Plan, design, and manage your garden and landscaping projects in one place. </p>
        </div>

        <div className="footer-section">
          <h3>Explore</h3>

          <nav aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/plants">Plant Library</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/recommendations">Recommendations</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h3>Account</h3>

          <nav aria-label="Account links">
            <Link to="/login">Login</Link>
            <Link to="/register">Create Account</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </div>

        {/* TODO:
          - Improve footer styling
          - Add responsive layout
          - Update footer links as needed
        */}
      </div>
    </footer>
  );
}
