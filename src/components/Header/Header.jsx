import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="title">
        <span className="logo"></span>
        AL-SHOP Admin
      </Link>
      <ul className="nav-links">
        <NavLink className="nav-item" to={"/signin"}>
          Hyr
        </NavLink>
        <NavLink className="nav-item" to={"/signup"}>
          Regjistrohu
        </NavLink>
      </ul>
    </nav>
  );
};
export default Header;
