import { Button, Link, TextareaAutosize, TextField } from "@material-ui/core";
import React from "react";
import {
  Animator,
  batch,
  Fade,
  Move,
  ScrollContainer,
  ScrollPage,
  Sticky,
} from "react-scroll-motion";
import "./Contact.css";

const Contact = () => {
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className="contact-container" id="contact">
      <h1 className="header-contact">Contact Me</h1>
      <main>
        <form>
          <section className="contact-info">
            <TextField required label="Name" />
            <TextField required label="Email" />
            <TextField required label="Subject" />
            <TextareaAutosize
              required
              rowsMin={8}
              placeholder="Type your message here"
            />
            <Button
              style={{ background: "#FFFFFF", color: "#424B54", width: "20%" }}
            >
              Submit
            </Button>
          </section>
        </form>
        <section className="connect-links-section">
          <h2>Lets Connect!</h2>
          <Link
            href="https://www.linkedin.com/in/karlaarodriguez/"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <img
              class="contact-icon"
              alt="linkedin"
              src="https://www.flaticon.com/svg/static/icons/svg/1384/1384014.svg"
            />
          </Link>
          <Link
            href="https://github.com/karlaarod"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            {" "}
            <img
              class="contact-icon"
              alt="github"
              src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
            />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Contact;
