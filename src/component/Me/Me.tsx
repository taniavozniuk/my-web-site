import React from "react";
import "./Me.scss";
import { useTranslation } from "react-i18next";

export const Me = () => {
  const { t } = useTranslation();
  return (
    <div className="me">
      <h1 className="me__title">{t("title")}</h1>
    </div>
  );
};
