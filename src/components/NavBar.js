import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "5 em",
    color: "black",
    marginBottom: "1em",
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    color: "black",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.roots}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="name-nav">
          <Link
            className={classes.title}
            to="landing-page"
            spy={true}
            smooth={true}
          >
            <h3>Karla Rodriguez</h3>{" "}
          </Link>
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
          <Link to="skills" spy={true} smooth={true}>
            Skills
          </Link>
          <Link to="projects" spy={true} smooth={true}>
            Portfolio
          </Link>

          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
          <span className={classes.menuButton}>
            <Link
              href="https://www.linkedin.com/in/karlaarodriguez/"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <img
                class="media-icon"
                alt="linkedin"
                src="https://www.flaticon.com/svg/static/icons/svg/1384/1384014.svg"
              />
            </Link>
            <Link
              href="https://github.com/karlaarod"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <img
                class="media-icon"
                alt="github"
                src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
              />
            </Link>
          </span>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;
