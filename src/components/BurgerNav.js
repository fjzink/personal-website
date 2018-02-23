import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faBriefcase, faListUl } from '@fortawesome/fontawesome-free-solid/'
import './BurgerNav.css';

class BurgerNav extends Component {
  render() {
    return(
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
        <a className={"nav-link"}><FontAwesomeIcon icon={faUser} /> About</a>
        <a className={"nav-link"}><FontAwesomeIcon icon={faListUl} /> Skills</a>
        <a className={"nav-link"}><FontAwesomeIcon icon={faBriefcase} /> Projects</a>
        <a className={"nav-link"}><FontAwesomeIcon icon={faEnvelope} /> Contact</a>
      </Menu>
    );
  }
}

export default BurgerNav;