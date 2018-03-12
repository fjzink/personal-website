import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <h1 className={"name-title animated fadeInLeftBig"}>Joey Zink</h1>
        <img src={require('./joey2.jpg')} alt={"joey"} className={"profile-pic animated fadeInLeftBig"}/>
        <p className={"job-title animated fadeInLeftBig"}>Sofware Engineer</p>
      </div>
    );
  }
}

export default Header;