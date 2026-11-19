import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Shared layout for all pages.
 *
 * Navbar - Website navigation
 * Outlet - Current page content
 * Footer - Website footer
 */

export default function RootLayout() {
  return (
    <div className="layout">

      {/* Navigation */}
      <Navbar />

      {/* Main Page */}
      <main id="main">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
