import React, { Component } from 'react';
import FAListItem from '../FAListItem/FAListItem';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands/';
import './Project.css';

class Project extends Component {
  render() {
    return(
      <div className={"Project"}>
        <div className={"project-header"}>
          <h4 className={"project-title"}>{this.props.title}</h4>
          <a href={this.props.imageLink}><img className={"project-image"} src={this.props.image} alt={""}/></a>
        </div>
        <ul className={"fa-ul"}>
          {this.props.description.map((listItem) => {
            return <FAListItem>{listItem}</FAListItem>;
          })}
          {this.props.githubLink.map((link) => {
            return <FAListItem><a className={"github-link"} href={link.url}><FontAwesomeIcon className={"github-icon"} icon={faGithub} />{link.text}</a></FAListItem>
          })}
        </ul>
      </div>
    );
  }
}

export default Project;