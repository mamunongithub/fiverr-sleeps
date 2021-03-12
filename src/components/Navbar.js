import React from "react";
import { Link } from "gatsby";

import { MenuIcon } from "./icons";
import logo from "../img/sleeps/logo.png";

const navItems = [
  { name: "Avis Matelas", url: "/tag/avis-matelas" },
  { name: "Meilleurs Matelas", url: "/tag/meilleurs-matelas" },
  { name: "Comparatifs", url: "/tag/comparatifs" },
  { name: "Literie", url: "/tag/literie" },
  { name: "Guides", url: "/tag/guides" },
  { name: "Simulateur", url: "/tag/simulateur" },
  { name: "Sleeps", url: "/sleeps" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="container navbar__container">
        <div className="navbar__brand">
          <Link to="/" title="Logo">
            <img src={logo} className="navbar__logo" alt="Sleeps Logo" />
          </Link>
          <button className="navbar__button" onClick={() => setOpen(!open)}>
            <MenuIcon />
          </button>
        </div>
        <div className={`navbar__menu ${open ? "navbar__menu--open" : ""}`}>
          {navItems.map(({ name, url }, index) => (
            <Link key={index} className="navbar__menu-item" to={url}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
