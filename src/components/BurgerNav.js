import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faBriefcase, faListUl, faHome } from '@fortawesome/fontawesome-free-solid/';
import './BurgerNav.css';

class BurgerNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  closeMenu() {
    this.setState({menuOpen: false});
  }

  render() {
    return(
      <Menu isOpen={this.state.menuOpen} >
        <a onClick={() => this.closeMenu()} className={"nav-link"} href={"#top"}><FontAwesomeIcon icon={faHome} /> Home</a>
        <a onClick={() => this.closeMenu()} className={"nav-link"} href={"#skills-section"}><FontAwesomeIcon icon={faListUl} /> Skills</a>
        <a onClick={() => this.closeMenu()} className={"nav-link"} href={"#projects-section"}><FontAwesomeIcon icon={faBriefcase} /> Projects</a>
        <a onClick={() => this.closeMenu()} className={"nav-link"} href={"#about-section"}><FontAwesomeIcon icon={faUser} /> About</a>
        <a onClick={() => this.closeMenu()} className={"nav-link"} href={"#contact-section"}><FontAwesomeIcon icon={faEnvelope} /> Contact</a>
      </Menu>
    );
  }
}

export default BurgerNav;