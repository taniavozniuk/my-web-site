import { useTranslation } from "react-i18next";
import styles from "./Aside.module.scss";
import React from "react";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";

interface AsideProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const Aside: React.FC<AsideProps> = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const handleLinkClick = () => {
    setOpen(false); // закриваю меню коли обране якесь посилання
  };

  return (
    <aside className={`${styles.aside} ${open ? styles.open : ""}`}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__ul}>
          <li className={styles.navigation__li}>
            <a className={styles.a} href="#about" onClick={handleLinkClick}>
              {t("nav.about")}
            </a>
          </li>

          <li className={styles.navigation__li}>
            <a className={styles.a} href="#projects" onClick={handleLinkClick}>
              {t("nav.projects")}
            </a>
          </li>

          <li className={styles.navigation__li}>
            <a
              className={styles.a}
              href="#certificates"
              onClick={handleLinkClick}
            >
              {t("nav.certificates")}
            </a>
          </li>

          <li className={styles.navigation__li}>
            <a className={styles.a} href="#contact" onClick={handleLinkClick}>
              {t("nav.contact")}
            </a>
          </li>
        </ul>
      </nav>
      <LanguageSelector />
    </aside>
  );
};
