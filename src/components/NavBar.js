import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Link, animateScroll as scroll } from "react-scroll";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '5 em',
      color:'black'
    },
    menuButton: {
      marginRight: theme.spacing(3),

    },
    title: {
      flexGrow: 1,
    },
    appBar:{
        background: 'transparent',
        boxShadow: 'none',
        color: 'black',
    }
  }));

const NavBar = () =>{
    const classes = useStyles();

    const scrollToTop=()=>{
        scroll.scrollToTop();
    };

    console.log('scroll top', scrollToTop)

return (
    <nav className={classes.roots} >
    <AppBar 
    position="static" 
    className={classes.appBar}
    >
    <Toolbar className="name-nav" id="nav-item">
    <h3 className={classes.title}>Karla Rodriguez</h3>
    <Link
    to="about" 
    spy={true} 
    smooth={true} 
    >
    About Me 
    </Link>
    <Link
    to="projects" 
    spy={true} 
    smooth={true} 
    >
    Portfolio
    </Link>
    <Link
    to="contact" 
    spy={true} 
    smooth={true} 
    >
    Contact
    </Link>
    <span className={classes.menuButton}>
    <a href="https://www.linkedin.com/in/karlaarodriguez/" target="_blank" rel='noreferrer'>
    <img class="media-icon" alt="linkedin" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384014.svg"/>
    </a> 
    <a href="https://github.com/karlaarod" target="_blank" rel='noreferrer'>
        <img class="media-icon" alt="github" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"/>
    </a> 
    </span>
    </Toolbar>

    </AppBar>
    </nav>
)

}

export default NavBar;