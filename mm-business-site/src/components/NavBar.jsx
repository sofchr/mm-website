import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar-section">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Portfolio">Portfolio</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
}
