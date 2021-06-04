import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

const styles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    padding: theme.spacing(2),
    width: "800px",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default function ProjectDialog({
  title,
  role,
  img,
  description,
  technologies,
  github,
  deployment,
}) {
  const [open, setOpen] = useState(false);
  const classes = styles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <UnfoldMoreIcon />
      </IconButton>

      <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <div className="single-project-dialog">
          <img src={img} alt="project" className="dialog-img" />
          <span className="project-details">
            <h2>{title}</h2>
            <h5>{role}</h5>
            <p>{description}</p>
            <p>
              <b>Technologies Used:</b> {technologies}
            </p>
            <p>
              <b>View more:</b>
            </p>
            <Link href={github} target={"_blank"} rel={"noopener noreferrer"}>
              Github
            </Link>
            <Link
              href={deployment}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Deployment
            </Link>
          </span>
        </div>
      </Dialog>
    </div>
  );
}
