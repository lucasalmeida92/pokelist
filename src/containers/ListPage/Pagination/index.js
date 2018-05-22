import React, { Component } from 'react';
import './index.scss';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e, i) {
    this.props.onPageClick(i);
  }

  render() {

    const { total, amountPerPage, currentPage } = this.props;

    let pages = Math.floor(total / amountPerPage);
    if((total % amountPerPage) > 0) {
      pages++;
    }

    let links = [];
    for (let i = 1; i <= pages; i++) {
      let currentClass = '';
      if(currentPage === i)
        currentClass = 'Pagination__link--current';
      links[i] = (
          <button
            key={i}
            className={`Pagination__link ${currentClass}`}
            onClick={(e) => this.handleOnClick(e, i)}
          >
            {i}
          </button>
        );
    }

    return (
      <div className="Pagination">
        { links }
      </div>
    );
  }
}

export default Pagination;
