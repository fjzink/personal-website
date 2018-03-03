import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Project from '../Project/Project';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/fontawesome-free-solid/';
import { Flip } from 'react-reveal';
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
          image: rwpic,
          imageLink: "https://github.com/fjzink/RoadWarriors-Frontend",
          githubLink: [
            {text: "Frontend Repo", url: "https://github.com/fjzink/RoadWarriors-Frontend"},
            {text: "Backend Repo", url: "https://github.com/fjzink/RoadWarriors-Backend"}
          ]
        },
        eliteskills: {
          description: [
            "Elite Skills is a web app designed to help you improve any skill you want to track.",
            "Skills that are related are organized into groups.",
            "You can enter in your progress each day for a particular skill, and you can view data visualization to help you gauge your progress.",
            "The frontend user interface is built using React, and the backend is a JSON API built using Ruby on Rails.",
            "Data visualization for skills is created using the Victory library by Formidable, and the UI was made using Bootstrap."
          ],
          image: espic,
          imageLink: "https://github.com/fjzink/Elite-Skills-Frontend",
          githubLink: [
            {text: "Frontend Repo", url: "https://github.com/fjzink/Elite-Skills-Frontend"},
            {text: "Backend Repo", url: "https://github.com/fjzink/Elite-Skills-API"}
          ]
        },
        thiswebsite: {
          description: [
            "This is my personal webite that I created using React.",
            "I used Font Awesome's icons as well as their React library to add the SVG icons to my site.",
            "The navigation menu was created using the react-burger-menu npm module.",
            "The Animate.css library was used to add animations to the header section of the site.",
            "I used the react-reveal npm module to add the reveal animations for the projects section."
          ],
          image: websitepic,
          imageLink: "https://github.com/fjzink/personal-website",
          githubLink: [
            {text: "Github Repo", url: "https://github.com/fjzink/personal-website"}
          ]
        },
        nigel: {
          description: [
            "Nigel is a web app designed for use in education that allows people to share resources.",
            "Resources can be tagged with a hashtag so that they can be categorized.",
            "There are teacher and student user accounts each with different levels of authorization.",
            "The web app was created using Ruby on Rails and uses PostgreSQL for the database."
          ],
          image: nigelpic,
          imageLink: "https://github.com/fjzink/Nigel",
          githubLink: [
            {text: "Github Repo", url: "https://github.com/fjzink/Nigel"}
          ]
        }
    };
  }

  render() {
    return(
      <div className="Projects" id="projects-section">
        <SectionTitle><FontAwesomeIcon icon={faBriefcase} /> Projects</SectionTitle>
        <div className={"project-rows"}>
          <div className={"first-row"}>
            <div className={"flip-comp"}>
            <Flip left duration={1500}>
              <Project
                title={"RoadWarriors"}
                image={this.state.roadwarriors.image}
                description={this.state.roadwarriors.description}
                imageLink={this.state.roadwarriors.imageLink}
                githubLink={this.state.roadwarriors.githubLink}
              />
            </Flip>
            </div>
            <div className={"flip-comp"}>
            <Flip left duration={1500}>
              <Project
                id={"eliteskills"}
                title={"Elite Skills"}
                image={this.state.eliteskills.image}
                description={this.state.eliteskills.description}
                imageLink={this.state.eliteskills.imageLink}
                githubLink={this.state.eliteskills.githubLink}
              />
            </Flip>
            </div>
          </div>
          <div className={"second-row"}>
            <div className={"flip-comp"}>
            <Flip left duration={1500}>
              <Project
                title={"This Website"}
                image={this.state.thiswebsite.image}
                description={this.state.thiswebsite.description}
                imageLink={this.state.thiswebsite.imageLink}
                githubLink={this.state.thiswebsite.githubLink}
              />
            </Flip>
            </div>
            <div className={"flip-comp"}>
            <Flip left duration={1500}>
              <Project
                title={"Nigel"}
                image={this.state.nigel.image}
                description={this.state.nigel.description}
                imageLink={this.state.nigel.imageLink}
                githubLink={this.state.nigel.githubLink}
              />
            </Flip>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;