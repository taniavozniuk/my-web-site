import React from "react";
import "./Me.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Me = () => {
  const { t } = useTranslation();
  return (
    <div className="me">
      <h1 className="me__title">{t("title")}</h1>
      <div className="me__wraperAbout">
        <img className="me__star spin" alt="star" src="/image/Star.svg" />
        <div className="me__about">
          <h3 className="me__frontTitle">Frontend Developer</h3>
          <div className="me__wrapperDes">
            <img
              className="me__photo"
              src="/image/photo_2023-10-18_17-52-24.jpg"
              alt="photo"
            />
            <p className="me__des">{t("frontend.des")}</p>
          </div>
          <button className="me__button">
            <NavLink className='me__buttonText'to="/">contact me</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
