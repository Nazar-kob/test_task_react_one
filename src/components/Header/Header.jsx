import React from "react";
import style from "./Header.module.css";
import logo from "../../images/main_logo.jpg";

const Header = () => {
  return (
    <div className={style.mainWrapper}>
      <div className={style.leftWrapper}>
        <img src={logo} alt="Site logo" />
      </div>
      <div className={style.rightWrapper}>
        <h1 className={style.headerTitle}>Parent Questionnaire</h1>
        <div className={style.subTitle}>
          <h3>Detailed Analysis for First Last</h3>
        </div>
      </div>
    </div>
  );
};

export { Header };
