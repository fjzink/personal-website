import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/fontawesome-free-solid/';
import './Projects.css';

class Projects extends Component {
  render() {
    return(
      <div className="Projects">
        <SectionTitle><FontAwesomeIcon icon={faBriefcase} /> Projects</SectionTitle>
      </div>
    );
  }
}

export default Projects;