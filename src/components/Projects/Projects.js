import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Project from '../Project/Project';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/fontawesome-free-solid/';
import './Projects.css';

class Projects extends Component {
  render() {
    return(
      <div className="Projects" id="projects-section">
        <SectionTitle><FontAwesomeIcon icon={faBriefcase} /> Projects</SectionTitle>
        <Project />
      </div>
    );
  }
}

export default Projects;