import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faCity, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function ContactForm() {
  return (
    <Container>
      <center>
        <h1>Contact Me</h1>
        <p>Contact me with any questions or comments you may have with my information below.
            <br></br>
            <br></br>
            <br></br>
            <p>Email: <a href="mailto:chasekeen7@gmail.com" target="email">    
            <FontAwesomeIcon icon={faAddressBook} size="1x" /> <></> </a>Chasekeen7@gmail.com</p>
            <p>Phone: <a href="tel:267-650-9272" target="phone">
            <FontAwesomeIcon icon={faPhone} size="1x" /> <></>
            </a>(267)-650-9272</p>
            <br></br>
            <p> Address: <a href="Philadelphia" target="location">
            <FontAwesomeIcon icon={faCity} size="1x" />
            </a>Philadelphia Based</p>
        
            <br></br>
            <br></br>
            <br></br>
        </p>
        <p className="lead">
            <a
                href=" github.com/lostrp" target="git" rel="github" className="text-dark"
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
                href="https://www.linkedin.com/in/ryan-peterson-5b1b1b1b9/" target="linkedin" rel="linkedin" className="text-dark"
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            </p>
        </center>
</Container>
    );
}

export default ContactForm;