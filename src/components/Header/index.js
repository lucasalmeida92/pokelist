import React, { Component } from 'react';
import './index.scss';

class Header extends Component {
  render() {
    return (
        <header className="Header">
          <h1 className="Header__title"><a href="/" title="Homepage">POKÉlist</a></h1>
        </header>
    );
  }
}

export default Header;
