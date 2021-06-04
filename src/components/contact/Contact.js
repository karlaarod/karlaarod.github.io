import {Link} from "@material-ui/core";
import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import PinDropIcon from '@material-ui/icons/PinDrop';

const Contact = () => {

  return (
    <div className="contact-container" id="contact">
      <h1 className="header-contact">Get in Touch</h1>
      <main>
      <ContactForm/>
        <section className="connect-links-section">
          <h2>Stay Connected</h2>
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
            <img
              class="contact-icon"
              alt="github"
              src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
            />
          </Link>
          <div className='pindrop-location'>
          <PinDropIcon/>
              <h3>Los Angeles, CA</h3>
              </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
