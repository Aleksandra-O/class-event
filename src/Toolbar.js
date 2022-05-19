import React from "react";
import { Component } from 'react';

class Toolbar extends Component {

  constructor(props) {
    super(props);
    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  onSelectFilter = (evt) => {
    this.props.onSelectFilter(evt)
  }

  render () {

    const items = this.props.items;
    const filter = this.props.selected;
    
    return (
      <div className="toolbar">
        {items.map(item => <button data-name={item} key={item} onClick={this.onSelectFilter} data-filter={filter} className={item === filter ? "active" : "disactive" } >{item}</button>)}
      </div>
    );
  };

}

export default Toolbar;
