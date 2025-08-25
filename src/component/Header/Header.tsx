import { NavLink } from "react-router-dom";
import "./Header.scss";
import React from "react";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";


export const Header = () => {
  const { t } = useTranslation();
  const isActive = ({ isActive }: { isActive: boolean }) => {
    const baseClass = "navigation__li";
    const activeClass = isActive ? "navigation__li--active" : "";
    return `${baseClass} ${activeClass}`;
  };

  return (
    <header className="header">
      <NavLink to="">
        <img src="/image/logo/Vector.svg" alt="logo" className="logo" />
      </NavLink>
      <div className="header__wrapper">
        <nav className="navigation">
          <ul className="navigation__ul">
            <NavLink to="/about" className={isActive}>
              {t("nav.about")}
            </NavLink>
            <NavLink to="" className={isActive}>
              {t("nav.projects")}
            </NavLink>
            <NavLink to="" className={isActive}>
              {t("nav.certificates")}
            </NavLink>
            <NavLink to="" className={isActive}>
              {t("nav.contact")}
            </NavLink>
          </ul>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
};
