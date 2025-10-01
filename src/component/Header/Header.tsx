import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const isActive = ({ isActive }: { isActive: boolean }) => {
    const baseClass = styles.navigation__li;
    const activeClass = isActive ? styles["navigation__li--active"] : "";
    return `${baseClass} ${activeClass}`;
  };

  return (
    <header className={styles.header}>
      <NavLink to="">
        <img src="image/logo/Vector.svg" alt="logo" className="logo" />
      </NavLink>
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <ul className={styles.navigation__ul}>
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
