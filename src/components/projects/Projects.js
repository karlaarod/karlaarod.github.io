import {
  Card,
  CardContent,
  makeStyles
} from "@material-ui/core";
import React from "react";
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
            )
          )}
      </div>
    </div>
  );
};

export default Projects;
