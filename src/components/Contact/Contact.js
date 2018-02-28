import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid/';
import { faEnvelope as secondEnvelope } from '@fortawesome/fontawesome-free-regular/';
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands/';
import './Contact.css';

class Contact extends Component {
  render() {
    return(
      <div className="Contact" id="contact-section">
        <SectionTitle><FontAwesomeIcon icon={faEnvelope} /> Contact</SectionTitle>
        <div className={"contact-info"} >
          <p className={"contact-link"}><FontAwesomeIcon className={"contact-icon"} icon={secondEnvelope} transform={"down-2"} /> joeyzink@gmail.com</p>
          <a href={"https://www.linkedin.com/in/fultonzink/"} className={"contact-link link-style"}><FontAwesomeIcon className={"contact-icon"} icon={faLinkedin} /> LinkedIn</a>
          <a href={"https://github.com/fjzink"} className={"contact-link link-style"}><FontAwesomeIcon className={"contact-icon"} icon={faGithub} /> GitHub</a>
        </div>
      </div>
    );
  }
}

export default Contact;