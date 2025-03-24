import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/boolroad.svg";
import Rubrica from "../components/Rubrica"

//ciao a tutti
//Ciao
export default function Header() {
  return (
    <header className="p-3 shadow-sm">
      <nav className="navbar navbar-expand nav-custom">
        <div className=" navbar-nav d-flex align-items-center ">
          <NavLink className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="brand" width={150} />
          </NavLink>
          <NavLink className="home" to="/">
            Home
          </NavLink>
        </div>
        <Rubrica />
      </nav>
    </header>
  );
}
