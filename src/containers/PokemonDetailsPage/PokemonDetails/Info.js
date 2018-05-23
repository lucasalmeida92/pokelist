import React, { Component } from 'react';
import './Info.scss';

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <div className="Info__title">
          { this.props.title }
        </div>
        <div className="Info__content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Info;
