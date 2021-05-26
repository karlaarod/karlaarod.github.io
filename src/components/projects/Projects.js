import { Card, CardContent, Grid, Link, makeStyles } from '@material-ui/core';
import React from 'react';
import ProjectData from './ProjectData';
import ProjectDialog from './ProjectDialog';
import './Projects.css'

const useStyles = makeStyles(() =>({
    content:{
        padding:0,
    }
}));

const Projects= () =>{
const classes= useStyles();

console.log('project data', ProjectData())

return (
    <div className='project-container' id='projects'>
        <h1>Portfolio</h1>
        <div className='project-cards'>
        { ProjectData().map(({title, img, description, github, deployment}) => (
            <>
                <Card className='single-project-card'>
                <CardContent className={classes.content}>
                        
                        <img src={img} alt='project' className='project-img'/>
                        
                        <span className='project-details' >
                        <h3>{title}</h3>
                        {ProjectDialog({title, img, description, github, deployment})}
                        </span>
                </CardContent>
                </Card>

             </>
        ))}

    </div>
    </div>
)
}

export default Projects;