import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Project from '../Project/Project';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/fontawesome-free-solid/';
import rwpic from './roadwarriors.png'
import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "RoadWarriors",
          description: [
            "Roadwarriors is a road trip app that helps you find food and gas along your route.",
            "You can search for a destination and plot your route.",
            "The map continuously updates and displays food and gas near your current location.",
            "This native mobile app is decoupled with a JSON API back end built with Ruby on Rails, and a front end built with React Native.",
            "Multiple APIs were used to get data including the Google Maps API, Google Places API, and the Yelp API."
          ],
          image: rwpic
        }
      ]
    };
  }

  render() {
    return(
      <div className="Projects" id="projects-section">
        <SectionTitle><FontAwesomeIcon icon={faBriefcase} /> Projects</SectionTitle>
        {
          this.state.projects.map((thing) => {
            return(
              <Project
                title={thing.title}
                image={thing.image}
                description={thing.description}
              />
            );
          })
        }

      </div>
    );
  }
}

export default Projects;