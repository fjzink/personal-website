import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid/';
import './Contact.css';

class Contact extends Component {
  render() {
    return(
      <div className="Contact">
        <SectionTitle><FontAwesomeIcon icon={faEnvelope} /> Contact</SectionTitle>
      </div>
    );
  }
}

export default Contact;