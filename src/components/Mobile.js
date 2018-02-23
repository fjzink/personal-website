import React, { Component } from 'react';
import BurgerNav from './BurgerNav';
import Header from './Header/Header'

class Mobile extends Component {
  render() {
    return(
      <div className="Mobile">
        <BurgerNav />
        <Header />
      </div>
    );
  }
}

export default Mobile