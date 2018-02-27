import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faListUl} from '@fortawesome/fontawesome-free-solid/';
import FAListItem from '../FAListItem/FAListItem';
import SkillsList from '../SkillsList/SkillsList';
import './Skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proficient: ["Javascript", "Ruby", "Rails", "React.js", "SQL", "Jasmine", "RSpec", "Git", "CSS", "HTML", "Node.js", "Object Oriented Programming", "Sinatra", "AJAX"],
      exposure: ["C#", "Unity", "React Native", "Python"],
      professional: ["Test Drive Development", "Agile Methodologies"]
    };
  }

  render() {
    return(
      <div className="Skills" id="skills-section">
        <SectionTitle><FontAwesomeIcon icon={faListUl} /> Skills</SectionTitle>
        <div className="skill-lists">
          <SkillsList title="Proficient">
            {this.state.proficient.map((skill, index) => {
              return(<FAListItem key={index.toString()} >{skill}</FAListItem>)
            })}
          </SkillsList>
          <SkillsList title="Exposure">
            {this.state.exposure.map((skill, index) => {
              return(<FAListItem key={index.toString()} >{skill}</FAListItem>)
            })}
          </SkillsList>
          <SkillsList title="Professional">
            {this.state.professional.map((skill, index) => {
              return(<FAListItem key={index.toString()} >{skill}</FAListItem>)
            })}
          </SkillsList>
        </div>
      </div>
    );
  }
}

export default Skills;