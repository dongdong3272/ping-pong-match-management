import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-self">
      <Link className="navbar-brand navbar-brand-self" to="/">
        Ping Pong Point Manager
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>

          <Link className="nav-item nav-link" to="/register">
            Register
          </Link>

          <Link className="nav-item nav-link" to="/match">
            Match
          </Link>
        </div>
      </div>
    </nav>
  );
}
