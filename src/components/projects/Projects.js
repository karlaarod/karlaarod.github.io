import {
  Card,
  CardContent,
  Grid,
  Link,
  makeStyles,
  Paper,
  Slide,
  Slider,
} from "@material-ui/core";
import { Slideshow } from "@material-ui/icons";
import React from "react";
import Carousel from "react-material-ui-carousel";
import ProjectData from "./ProjectData";
import ProjectDialog from "./ProjectDialog";
import "./Projects.css";



const useStyles = makeStyles(() => ({
  content: {
    padding: 0,
    display:'flex',
    flexDirection:'row',
    width: 700,
    margin:'auto',
    gap: 9,

  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div className="project-container" id="projects">
      <h1>Portfolio</h1>

      <div className="project-cards">
          {ProjectData().map(
            ({
              title,
              role,
              img,
              description,
              technologies,
              github,
              deployment,
            }) => (
              <Card >

              <CardContent key={title}>
                <img src={img} alt="project" className="project-img" />
                <h4>{title}</h4>
                <ProjectDialog
                  title={title}
                  role={role}
                  img={img}
                  description={description}
                  technologies={technologies}
                  github={github}
                  deployment={deployment}
                />
              </CardContent>
              </Card>

              // <div key={title} className="single-project-card">
              //   <img src={img} alt="project" className="project-img" />
              //   <span className="project-details">
              //     <h2>{title}</h2>
              //     <h4>{role}</h4>
              //     <p>{description}</p>
              //     <p>Technologies Used: {technologies}</p>
              //     <h5>Learn More:</h5 >
              //     <Link
              //       href={github}
              //       target={"_blank"}
              //       rel={"noopener noreferrer"}
              //     >
              //       Github
              //     </Link>
              //     <Link
              //       href={deployment}
              //       target={"_blank"}
              //       rel={"noopener noreferrer"}
              //     >
              //       Deployment
              //     </Link>
              //   </span>
              // </div>
            )
          )}
      </div>
    </div>
  );
};

export default Projects;
