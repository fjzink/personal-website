import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div className="About">
        <img src={require('./joey.png')} alt={"joey"} />
      </div>
    );
  }
}

export default About;