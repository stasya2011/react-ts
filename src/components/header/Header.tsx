import { NavLink } from "react-router-dom";
import "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
