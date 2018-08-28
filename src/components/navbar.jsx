import React from "react";
//statelesss functional component
const NavBar = ({ counterlength }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar {counterlength}
      </a>
    </nav>
  );
};

export default NavBar;
