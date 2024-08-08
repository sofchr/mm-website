import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar-section">
      <div id="navbar-logo-title">
        {" "}
        <img className="logo" src="/src/assets/My Logo.png" />
        Envisioned Dwellings
      </div>
      <div id="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}
