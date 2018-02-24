import React, { Component } from 'react';
import BurgerNav from './BurgerNav';
import Header from './Header/Header';
import About from './About/About';

class Mobile extends Component {
  render() {
    return(
      <div className="Mobile">
        <BurgerNav />
        <Header />
        <About />
      </div>
    );
  }
}

export default Mobile