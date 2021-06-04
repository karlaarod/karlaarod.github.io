import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <main className="about-details">
        <img
          src="https://images.unsplash.com/photo-1588495756505-5437763146dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
          alt="filler"
        />
        <span>
          <h1>About </h1>
          <p>
          Karla Rodriguez is a Full Stack Developer from Los Angeles, California. Prior to discovering her passion for programming, Karla worked in human resources and recruiting. It was during this time that Karla learned to approach diverse situations with an inquisitive and logical perspective imperative for problem-solving. Additionally, her intuitive nature led her to develop strong professional relationships to deliver successful team projects.
          </p>
          <p>
          More recently, Karla graduated from a top-ranked Full Stack Development Program at the University of San Diego. During this immersive program, she further strengthened her skills in JavaScript-driven technologies, through collaborative pair programming and complex projects. Karla’s previous professional background allowed her to combine her dynamic new set of skills to design and build functional websites and applications with a focus on user experience. Karla hopes to use her passion and newfound skills to create impactful work, break barriers, and increase visibility for BIPOC in tech.
          </p>
        </span>
      </main>
    </div>
  );
};

export default About;
