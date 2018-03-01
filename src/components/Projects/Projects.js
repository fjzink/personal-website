import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Project from '../Project/Project';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/fontawesome-free-solid/';
import projects from './project_info.json';
import './Projects.css';

class Projects extends Component {
  render() {
    return(
      <div className="Projects" id="projects-section">
        <SectionTitle><FontAwesomeIcon icon={faBriefcase} /> Projects</SectionTitle>
        <Project title={projects.projects[0].title} image={require('./roadwarriors.png')}/>
      </div>
    );
  }
}

export default Projects;