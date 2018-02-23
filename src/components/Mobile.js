import React, { Component } from 'react';
import BurgerNav from './BurgerNav';
import About from './About/About'

class Mobile extends Component {
  render() {
    return(
      <div className="Mobile">
        <BurgerNav />
        <About />
      </div>
    );
  }
}

export default Mobile