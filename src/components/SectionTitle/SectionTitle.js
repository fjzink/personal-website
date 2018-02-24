import React, { Component } from 'react';
import './SectionTitle.css'

class SectionTitle extends Component {
  render() {
    return(
      <h2 className="SectionTitle">{ this.props.children }</h2>
    );
  }
}

export default SectionTitle