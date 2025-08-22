import { NavLink } from "react-router-dom";
import './Header.scss'
export const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <NavLink to="" className="li">
          About me
        </NavLink>
        <NavLink to="">Projects</NavLink>
        <NavLink to="">Certifacates</NavLink>
        <NavLink to="">Contact</NavLink>
        <NavLink to="">About me</NavLink>
      </nav>
    </header>
  );
};
