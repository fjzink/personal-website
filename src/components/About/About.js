import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/fontawesome-free-solid/';
import './About.css';

class About extends Component {
  render() {
    return(
      <div className="About">
        <SectionTitle><FontAwesomeIcon icon={faUser} /> About Me</SectionTitle>
        <p className="section-text">
        I am an aspiring software engineer with a background in mechanical engineering. Before pursuing a career in the tech industry, I got my BS in mechanical engineering from UC Berkeley and worked in the carbon fiber composites industry for a couple years. Some of my friends had switched careers from finance and mechanical engineering into software engineering, and their positive experiences in doing so made me interested in the tech industry too. After learning to program myself, I found I really enjoyed it and now I'm on the journey to become a software engineer.
        </p>
      </div>
    );
  }
}

export default About;