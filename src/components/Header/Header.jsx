import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    console.log("signin out!!");
    dispatch(signout());
  };
  return (
    <nav className="navbar">
      <Link to="/" className="title">
        <span className="logo"></span>
        AL-SHOP Admin
      </Link>
      <ul className="nav-links">
        {auth.authenticate ? (
          <NavLink
            className="nav-item font-bold"
            to={"/signout"}
            onClick={handleSignOut}
          >
            Dil
          </NavLink>
        ) : (
          <NavLink className="nav-item font-bold" to={"/signin"}>
            Hyr
          </NavLink>
        )}

        {!auth.authenticate && (
          <NavLink className="nav-item font-bold" to={"/signup"}>
            Regjistrohu
          </NavLink>
        )}
      </ul>
    </nav>
  );
};
export default Header;
