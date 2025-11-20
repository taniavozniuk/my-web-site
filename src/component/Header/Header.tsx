import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";
import React from "react";

interface HeaderProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}

export const Header: React.FC<HeaderProps> = ({ setOpen, open }) => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <img src="image/logo/Vector.svg" alt="logo" className={styles.logo} />

      {!open ? (
        <img
          className={styles.burger}
          alt="open menu"
          src="image/icon/menu.svg"
          onClick={() => setOpen(true)}
        />
      ) : (
        <img
          className={styles.burger}
          alt="close menu"
          src="image/icon/close.svg"
          onClick={() => setOpen(false)}
        />
      )}
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <ul className={styles.navigation__ul}>
            <li className={styles.navigation__li}>
              <a className={styles.a} href="#about">
                {t("nav.about")}
              </a>
            </li>
            <li className={styles.navigation__li}>
              <a className={styles.a} href="#projects">
                {t("nav.projects")}
              </a>
            </li>
            <li className={styles.navigation__li}>
              <a className={styles.a} href="#certificates">
                {t("nav.certificates")}
              </a>
            </li>
            <li className={styles.navigation__li}>
              <a className={styles.a} href="#contact">
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
