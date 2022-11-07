import React from "react";
import style from "./Card.module.css";

const Card = ({ title, children }) => {
  return (
    <div className={style.cardWrapper}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export { Card };
