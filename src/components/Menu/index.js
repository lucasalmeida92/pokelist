import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Menu extends Component {
  render() {
    return (
        <ul className="Menu">
          <li className="Menu__item">
            <Link to="/" title="Show Resumes">Show Resumes</Link>
          </li>
          <li className="Menu__item">
            <Link to="/create-resume" title="Create">Create</Link>
          </li>
        </ul>
    );
  }
}

export default Menu;
