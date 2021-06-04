import { Card} from "@material-ui/core";
import React from "react";
import SkillsData from "./SkillsData";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h1>Skills</h1>
      <div className="bg-color-skills"></div>

      <section className="skill-section">
        <h4>{'<Development>'}</h4>
        {SkillsData().map(({ name, icon }, index) => (
          <div key={index} className="single-card">
            <Card>
              <img src={icon} alt="project" className="skills-icon" />
              <div className="skills-name">{name}</div>
            </Card>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
