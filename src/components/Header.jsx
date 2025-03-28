import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/boolroad.svg";




export default function Header() {
  return (
    <header className="p-3 shadow-sm position-sticky top-0 z-3">
      <nav className="navbar navbar-expand nav-custom">
        <div className=" navbar-nav d-flex align-items-center ">
          <NavLink className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="brand" width={150} />
          </NavLink>
          <NavLink className="home" to="/">
            Home
          </NavLink>
          <NavLink className="home ms-3" to="/travels/rubrica">
            Rubrica
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
