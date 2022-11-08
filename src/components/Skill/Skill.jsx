import React from "react";
import style from "./Skill.module.css";

const Skill = ({ el }) => {
  const minHeight = 7;
  const increment = 1.5;

  return (
    <div className={style.SkillContent}>
      <div className={style.skillBar}>
        {[...Array(10).keys()].map((_, idx) => {
          return (
            <div
              key={idx}
              style={{
                height: `${minHeight + increment * idx}px`,
                backgroundColor: idx < el.level ? "#7498bd" : "grey",
              }}
              className={style.skillStep}
            ></div>
          );
        })}
      </div>
      <h4 className={style.textTitle}>{el.title}</h4>
      <p className={style.textDescription}>{el.description}</p>
    </div>
  );
};

export { Skill };
