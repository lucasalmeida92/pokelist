import React, { Component } from 'react';
import './index.scss';

class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <svg className="Loader__pokeball" xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 100 100">
          <path d="M 30 50
            a 1 1 1 0 1 40 0
            h-12.5
            a 1 1 1 0 0 -15 0
            z"
            fill="#e74c3c" stroke="#222"
          ></path>
          <circle
            cx="50"
            cy="50"
            r="3"
            fill="#222" stroke="#222"
          ></circle>
          <path d="M 30 50
            a 1 1 1 0 0 40 0
            h-12.5
            a 1 1 1 0 1 -15 0
            z"
            fill="#fff" stroke="#222"
          ></path>
        </svg>
      </div>
    );
  }
}

export default Loader;
