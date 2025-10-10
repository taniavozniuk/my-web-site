import { NavLink } from "react-router-dom";
import { link } from "./link";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <ul className={styles.ul}>
        {link.map((l) => (
          <li key={l.id}>
            <NavLink to={l.link} className={styles.li}>
              {l.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.wrapQuestion}>
        <h2 className={styles.question}>{t("questions")}</h2>
        <button className={styles.button}>{t("btques")}</button>
      </div>
    </div>
  );
};
