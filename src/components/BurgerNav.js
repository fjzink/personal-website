import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './BurgerNav.css';

class BurgerNav extends Component {
  render() {
    return(
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
        <a>About</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Contact</a>
      </Menu>
    );
  }
}

export default BurgerNav;