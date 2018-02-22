import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './BurgerNav.css';

class BurgerNav extends Component {
  render() {
    return(
      <Menu>
        <a>About</a>
        <a>Skills</a>
        <a>Contact</a>
      </Menu>
    );
  }
}

export default BurgerNav;