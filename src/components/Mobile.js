import React, { Component } from 'react';
import BurgerNav from './BurgerNav';
import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

class Mobile extends Component {
  render() {
    return(
      <div className="Mobile">
        <BurgerNav />
        <Header />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    );
  }
}

export default Mobile