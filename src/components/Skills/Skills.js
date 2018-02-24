import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/fontawesome-free-solid/';
import './Skills.css';

class Skills extends Component {
  render() {
    return(
      <div className="Skills">
        <SectionTitle><FontAwesomeIcon icon={faListUl} /> Skills</SectionTitle>
      </div>
    );
  }
}

export default Skills;