import { NavLink } from "react-router-dom";
import { link, linkMoblide } from "./link";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.wrapQuestion}>
          <h2 className={styles.question}>{t("questions")}</h2>
          <a className={styles.button} href="mailto:taniavoznyk19655@gmail.com">
            {t("btques")}
          </a>
        </div>
      </div>
      <ul className={styles.ul}>
        {link.map((l) => (
          <li key={l.id}>
            <NavLink to={l.link} className={styles.li} target="_blank">
              {l.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className={styles.ulM}>
        {linkMoblide.map((l) => (
          <li key={l.id}>
            <NavLink to={l.link} className={styles.li} target="_blank">
              <img src={l.image} alt={l.name} className={styles.icon} />
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
