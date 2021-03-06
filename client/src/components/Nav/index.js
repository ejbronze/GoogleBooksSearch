import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="nav navbar-expand-lg navbar-darknavbar navbar-dark bg-success">
      <a className="nav-link text-info" href="/">
        <h3>GBook Search</h3>
      </a>
      <a className="nav-link mt-2 text-white" href="/">
        Search
      </a>
      <a className="nav-link mt-2 text-white" href="/saved">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
