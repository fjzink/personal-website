import React, { Component } from 'react';
import FAListItem from '../FAListItem/FAListItem';
import './Project.css';

class Project extends Component {
  render() {
    return(
      <div className={"Project"}>
        <div className={"project-header"}>
          <h4 className={"project-title"}>{this.props.title}</h4>
          <a href={"https://github.com/fjzink/RoadWarriors-Frontend"}><img className={"project-image"} src={this.props.image} alt={""}/></a>
        </div>
        <ul className={"fa-ul"}>
          <FAListItem>First Item this is a test to see what it looks like.</FAListItem>
          <FAListItem>Second Item this is also a test.</FAListItem>
          <FAListItem>Third Item omg another test are you crazy?!?!?</FAListItem>
        </ul>
      </div>
    );
  }
}

export default Project;