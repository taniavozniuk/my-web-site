import React from "react";
import styles from "./Me.module.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Me = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.me} id="about">
      {/* <h1 className="font-playfair font-normal text-[159px] leading-[100%] text-[#ac4800] tracking-[3px] mb-[35px] w-full text-center flex items-center justify-center">
        {t("title")}
      </h1> */}
      <h1 className={styles.title}>{t("title")}</h1>
      <div className={styles.wraperAbout}>
        {/* <img
          className={`${styles.star} ${styles.spin}`}
          alt="star"
          src="image/Star.svg"
        /> */}
        <img src="image/7d1.gif" alt="gif" className={styles.gif} />
        <div className={styles.about}>
          <h2 className={styles.frontTite}>Frontend Developer</h2>
          <div className={styles.wrapperDes}>
            <img
              className={styles.photo}
              src="image/photo_2023-10-18_17-52-24.jpg"
              alt="photo"
            />
            <p className={styles.des}>{t("frontend.des")}</p>
          </div>
          {/* <a className={styles.button} href='/'> */}
          <a className={styles.button} href="#contact">
            contact me
          </a>

          {/* </a> */}
        </div>
      </div>
    </section>
  );
};
