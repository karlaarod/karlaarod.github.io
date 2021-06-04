import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { DialogContent, DialogTitle, Link } from '@material-ui/core';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import ProjectData from "./ProjectData";


const styles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    padding: theme.spacing(2),
    width: '800px',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

export default function ProjectDialog({title, role, img, description, technologies, github, deployment}) {
  const [open, setOpen] = useState(false);
  const classes= styles()

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <UnfoldMoreIcon/>
        </IconButton>

      <Dialog onClose={handleClose}  
      open={open}
      fullWidth
      maxWidth="md"
      >
         <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <div className="single-project-dialog">
        <img src={img} alt="project" className="dialog-img" />
         <span className="project-details">
           <h2>{title}</h2>
           <h5>{role}</h5>
           <p>{description}</p>
           <p><b>Technologies Used:</b> {technologies}</p>
           <p><b>View more:</b></p>
           <Link
             href={github}
             target={"_blank"}
             rel={"noopener noreferrer"}
           >
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


// {ProjectData().map(
//     ({ title, role, img, description, technologies, github, deployment }) => (

//       <div key={title} className="single-project-card">
//         <img src={img} alt="project" className="project-img" />
//         <span className="project-details">
//           <h2>{title}</h2>
//           <h4>{role}</h4>
//           <p>{description}</p>
//           <p>Technologies Used: {technologies}</p>
//           <h5>Learn More:</h5 >
//           <Link
//             href={github}
//             target={"_blank"}
//             rel={"noopener noreferrer"}
//           >
//             Github
//           </Link>
//           <Link
//             href={deployment}
//             target={"_blank"}
//             rel={"noopener noreferrer"}
//           >
//             Deployment
//           </Link>
//         </span>
//       </div>

//     )
//   )}