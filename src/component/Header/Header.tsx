import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const isActive = (sectionId: string) => {
    // логіка для active класу перевіряєю чи секція в viewport
    const element = document.getElementById(sectionId);
    if (!element) return styles.navigation__li;
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
    return isInViewport
      ? `${styles.navigation__li} ${styles["navigation__li--active"]}`
      : styles.navigation__li;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <img src="image/logo/Vector.svg" alt="logo" className="logo" />
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <ul className={styles.navigation__ul}>
            <li className={isActive("about")}>
              <a
                className={styles.a}
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                {t("nav.about")}
              </a>
            </li>
            <li className={isActive("projects")}>
              <a
                className={styles.a}
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                {t("nav.projects")}
              </a>
            </li>
            <li className={isActive("certificates")}>
              <a
                className={styles.a}
                href="#certificates"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("certificates");
                }}
              >
                {t("nav.certificates")}
              </a>
            </li>
            <li className={isActive("contact")}>
              <a
                className={styles.a}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
};
