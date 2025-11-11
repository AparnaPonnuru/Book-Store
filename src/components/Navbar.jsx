import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">All Courses</Link>
      <Link to="/bookmarked">Bookmarked</Link>
    </nav>
  );
}
