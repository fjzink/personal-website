import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/fontawesome-free-solid/';
import './FAListItem.css';

class FAListItem extends Component {
  render() {
    return(
      <li className="FAListItem"><FontAwesomeIcon icon={faAngleRight} listItem transform="grow-4 down-3 right-5" />{this.props.children}</li>
    );
  }
}

export default FAListItem;