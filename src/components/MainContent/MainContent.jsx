import React from "react";
import style from "./MainContent.module.css";

import logo from "../../images/wheel.jpg";
import { Gauge, Card, Skill } from "../../components";

const listOfSkills = [
  {
    id: 1,
    title: "Self-Awareness:",
    level: 4,
    description:
      "A child's realistic understanding of her/his strengths and limitations and consistent desire for self-improvement.",
  },
  {
    id: 2,
    title: "Social-Awareness:",
    level: 6,
    description:
      "A child's capacity to interact with others in a way that shows respect for their ideas and behaviors, recognizes her/his impact on them, and uses cooperation and tolerance in social situations.",
  },
  {
    id: 3,
    title: "Self-Management:",
    level: 8,
    description:
      "A child's success in controlling his or her emotions and behaviors, to complete a task or succeed in a new challenging situation.",
  },
  {
    id: 4,
    title: "Goal-Directed Bechavior:",
    level: 2,
    description:
      "A child's initiation of and persistence in completing tasks of various difficulty.",
  },
  {
    id: 5,
    title: "Relationship Skills:",
    level: 5,
    description:
      "A child's consistent performance of socially acceptable actions that promote and maintain positive connections with others.",
  },
  {
    id: 6,
    title: "Personal Responsibility:",
    level: 1,
    description:
      "A child's tendency to be careful and reliable in her/his actions and in contributing to group efforts.",
  },
  {
    id: 7,
    title: "Decision Making:",
    level: 0,
    description:
      "A child's approach to problem solving that involves learning from others and from her/his own previous experiences, using her/his values to guide her/his action, and accepting responsibility for her/his decisions.",
  },
  {
    id: 8,
    title: "Optimistic Thinking:",
    level: 9,
    description:
      "A child's attitude of confidence, hopefulness, and positive thinking regarding herself/himself and her/his life situations in the past, present, and future.",
  },
];

const MainContent = () => {
  return (
    <div className={style.contentWrapper}>
      <div className={style.upperSection}>
        <Card title="Based On Your Answers, Your Child Can Improve Their College Preparation">
          <Gauge />
        </Card>
        <img src={logo} alt="College Readiness skills diagram" />
      </div>
      <div className={style.lowerSection}>
        <Card title="Skill Progress">
          {listOfSkills.map((el) => {
            return <Skill key={el.id} el={el} />;
          })}
        </Card>
      </div>
    </div>
  );
};

export { MainContent };
