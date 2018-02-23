import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return(
      <div className="About">
        <img src={require('./joey.png')} alt={"joey"} className={"profile-pic"}/>
      </div>
    );
  }
}

export default About;