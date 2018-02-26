import React, { Component } from 'react';
import './SkillsList.css';

class SkillsList extends Component {
  render() {
    return(
      <div className="SkillsList">
        <h4><span className="list-title">{this.props.title}</span></h4>
        <ul className="fa-ul list-style">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default SkillsList;