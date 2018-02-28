import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <h1 className={"name-title animated bounceInLeft"}>Joey Zink</h1>
        <img src={require('./joey.png')} alt={"joey"} className={"profile-pic animated bounceInLeft"}/>
      </div>
    );
  }
}

export default Header;