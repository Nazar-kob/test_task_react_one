import React from "react";
import style from "./Skill.module.css";

const Skill = ({ el }) => {
  //   const skillLevel = 7;
  console.log(el, "props");
  const minHeight = 7;
  const increment = 1.5;

  return (
    <>
      <div className={style.skillBar}>
        {[...Array(10).keys()].map((_, idx) => {
          return (
            <div
              key={idx}
              style={{
                height: `${minHeight + increment * idx}px`,
                backgroundColor: idx < el.level ? "green" : "grey",
              }}
              className={style.skillStep}
            ></div>
          );
        })}
      </div>
      <h4>{el.title}</h4>
      <p>{el.description}</p>
    </>
  );
};

export { Skill };
