import { Link, NavLink } from "react-router-dom";
import { info } from "./info";
import styles from "./Project.module.scss";
import { useTranslation } from "react-i18next";
export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.projCon} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <section className={styles.section}>
        {info.map((item) => (
          <div
            className={`${styles.wrapeCon} ${
              item.id % 2 !== 0 ? styles.reverse : ""
            }`}
            key={item.id}
          >
            <div className={styles.wrapInfo}>
              <div className={styles.wrapImg}>
                {item.technologi.map((t) => (
                  <div className={styles.techno}>
                    <img src={t.src} key={t.id} alt="" className={styles.img} />
                  </div>
                ))}
              </div>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.dec}>{t(`project.${item.description}`)}</p>
              {item.link && (
                <Link className={styles.button} to={item.link} target="_blank">
                  {t("visit")}
                </Link>
              )}
            </div>
            <img
              src={item.iamge}
              alt=""
              className={`${styles.imgPro} ${
                item.id % 2 !== 0 ? styles.imgProRight : styles.imgProLeft
              }`}
            />
          </div>
        ))}
      </section>
    </section>
  );
};
