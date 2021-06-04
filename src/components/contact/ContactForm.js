import {
  Button,
  Snackbar,
  TextareaAutosize,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { Alert } from "@material-ui/lab";
import emailjs from "emailjs-com";
import "./Contact.css";

require("dotenv").config();

const { REACT_APP_SERVICE_ID, REACT_APP_API_KEY, REACT_APP_TEMP_ID } =
  process.env;

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  function AlertMessage({classes, open, handleClose}){
 
    return (
        <div className={classes}>
        <Snackbar open={open} autoHideDuration={4000} >
        <Alert onClose={handleClose} severity="success">
          Message has been sent!
        </Alert>
        </Snackbar>
        </div>
    )
}

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const classes= useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(true);
    setOpen(true)

    emailjs
      .sendForm(
        `${REACT_APP_SERVICE_ID}`,
        `${REACT_APP_TEMP_ID}`,
        e.target,
        `${REACT_APP_API_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <form onSubmit={sendEmail}>

        {success ? 
        <AlertMessage 
        classes={classes.root}
        open={open}
        handleClose= {handleClose}
        /> : ""}
        <section className="contact-info">
          <TextField required label="First Name" name="first_name" />
          <TextField required label="Last Name" name="last_name" />
          <TextField required label="Email" name="email" />
          <TextField required label="Subject" name="subject" />
          <TextareaAutosize
            required
            rowsMin={6}
            placeholder="Type your message here"
            name="message"
          />
          <Button
            className="submit-button"
            style={{ background: "#FFFFFF", color: "#823200", width: "20%" }}
            type="submit"
          >
            Submit
          </Button>
        </section>
      </form>
    </>
  );
};
