import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="flexbox-container">
        <Link to="/" className="logo">
          <span><img src="https://i.ibb.co/vmzrGQB/nhllogo.png" alt=""/></span>
        </Link>
        <nav className="flexbox-container-navlink__color">
          <Link to="/teams"><span>Teams</span></Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
