import React from "react";
import style from "./Footer.module.css";
import logo from "../../images/footer_logo.jpg";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.logoWrapper}>
        <img src={logo} alt="Site logo" />
      </div>
    </div>
  );
};

export { Footer };
