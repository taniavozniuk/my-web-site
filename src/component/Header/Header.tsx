import { NavLink } from "react-router-dom";
import "./Header.scss";
import React from "react";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
export const Header = () => {
  const isActive = ({ isActive }: { isActive: boolean }) => {
    const baseClass = "navigation__li";
    const activeClass = isActive ? "navigation__li--active" : "";
    return `${baseClass} ${activeClass}`;
  };

  return (
    <header className="header">
      <NavLink to="">
        <img src="src\image\logo\Vector.svg" alt="logo" className="logo" />
      </NavLink>
      <div className="header__wrapper">
        <nav className="navigation">
          <ul className="navigation__ul">
            <NavLink to="/about" className={isActive}>
              About me
            </NavLink>
            <NavLink to="" className={isActive}>
              Projects
            </NavLink>
            <NavLink to="" className={isActive}>
              Certifacates
            </NavLink>
            <NavLink to="" className={isActive}>
              Contact
            </NavLink>
          </ul>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
};
