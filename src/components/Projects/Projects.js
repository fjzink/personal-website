import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Project from '../Project/Project';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/fontawesome-free-solid/';
import rwpic from './roadwarriors.png';
import espic from './eliteskills.png';
import websitepic from './mywebsite.jpg';
import nigelpic from './nigel.png';
import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
        roadwarriors: {
          description: [
            "Roadwarriors is a road trip app that helps you find food and gas along your route.",
            "You can search for a destination and plot your route.",
            "The map continuously updates and displays food and gas near your current location.",
            "This native mobile app is decoupled with a JSON API back end built with Ruby on Rails, and a front end built with React Native.",
            "Multiple APIs were used to get data including the Google Maps API, Google Places API, and the Yelp API."
          ],
          image: rwpic
        },
        eliteskills: {
          description: [
            "Elite Skills is a web app designed to help you improve any skill you want to track.",
            "Skills that are related are organized into groups.",
            "You can enter in your progress each day for a particular skill, and you can view data visualization to help you gauge your progress.",
            "The frontend user interface is built using React, and the backend is a JSON API built using Ruby on Rails.",
            "Data visualization for skills is created using the Victory library by Formidable, and the UI was made using Bootstrap."
          ],
          image: espic
        },
        thiswebsite: {
          description: [
            "This is my personal webite that I created using React.",
            "I used Font Awesome's icons as well as their React library to add the SVG icons to my site.",
            "The navigation menu was created using the react-burger-menu npm module.",
            "The Animate.css library was used to add animations to the header section of the site."
          ],
          image: websitepic
        },
        nigel: {
          description: [
            "Nigel is web app designed for use in education that allows people to share resources.",
            "Resources can be tagged with a hashtag so that they can be categorized.",
            "There are teacher and student user accounts each with different levels of authorization.",
            "The web app was created using Ruby on Rails and uses PostgreSQL for the database."
          ],
          image: nigelpic
        }
    };
  }

  render() {
    return(
      <div className="Projects" id="projects-section">
        <SectionTitle><FontAwesomeIcon icon={faBriefcase} /> Projects</SectionTitle>
        <div className={"project-rows"}>
          <div className={"first-row"}>
            <Project
              title={"RoadWarriors"}
              image={this.state.roadwarriors.image}
              description={this.state.roadwarriors.description}
            />
            <Project
              id={"eliteskills"}
              title={"Elite Skills"}
              image={this.state.eliteskills.image}
              description={this.state.eliteskills.description}
            />
          </div>
          <div className={"second-row"}>
            <Project
              title={"This Website"}
              image={this.state.thiswebsite.image}
              description={this.state.thiswebsite.description}
            />
            <Project
              title={"Nigel"}
              image={this.state.nigel.image}
              description={this.state.nigel.description}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;