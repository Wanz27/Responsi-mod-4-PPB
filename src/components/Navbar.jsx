import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="navbar">
      <Link className={pathname === "/" ? "nav-active" : ""} to="/">🏠 Timer</Link>
      <Link className={pathname === "/history" ? "nav-active" : ""} to="/history">📜 History</Link>
      <Link className={pathname === "/profile" ? "nav-active" : ""} to="/profile">👤 Profile</Link>
      <ThemeToggle />
    </div>
  );
}
