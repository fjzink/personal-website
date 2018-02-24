import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return(
      <div className="About">
        <h3 className="section-title">About Me</h3>
        <p>
        I am an aspiring software engineering with a background in mechanical engineering. Before pursuing a career in the tech industry, I got my BS in mechanical engineering from UC Berkeley and worked in the carbon fiber composites industry for a couple years. A couple of friends had switched careers from finance and mechanical engineering into software engineering, and their positive experiences in doing so made me interested in the tech industry too. After learning program myself, I found I really enjoyed it and now I'm on the journey to become a software engineer myself.
        </p>
      </div>
    );
  }
}

export default About;