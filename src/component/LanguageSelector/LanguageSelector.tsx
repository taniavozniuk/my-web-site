import React, { useState } from "react";
import i18next from "i18next";

export const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleChageLanguage = (lang:string) => {
    setSelectedLanguage(lang);
    i18next.changeLanguage(lang);
    console.log({ lang });
  };
  return (
    <div className="language-select">
      <span
        onClick={() => handleChageLanguage("en")}
        style={{
          cursor: "pointer",
          color: selectedLanguage === "en" ? "#AC4800" : "#ac480066",
        }}
        className="english"
      >
        En
      </span>
      {"/"}
      <span
        className="ukrainian"
        onClick={() => handleChageLanguage("uk")}
        style={{
          cursor: "pointer",
          color: selectedLanguage === "uk" ? "#AC4800" : "#ac480066",
        }}
      >
        Uk
      </span>
    </div>
  );
};
