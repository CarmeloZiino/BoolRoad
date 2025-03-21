import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/boolroad.svg";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand">
        <div className="nav navbar-nav d-flex align-items-center">
          <NavLink className="navbar-brand" to="/">
            <img
              className="logo"
              src={logo}
              alt="brand"
              width={75}
            />
          </NavLink>
          <NavLink className="nav-item nav-link nav-route" to="/">
            Home
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
