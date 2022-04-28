import React from "react";
import { Component } from 'react';

class Toolbar extends Component {

  constructor(props) {
    super(props);
    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  onSelectFilter = () => {
    this.props.onSelectFilter(this.props.selected)
  }

  render () {

    const items = this.props.items;
    //const filter = this.props.selected;
    
    return (
      <div className="toolbar">
        {items.map(item => <button key={item} onClick={this.onSelectFilter} >{item}</button>)}
      </div>
    );
  };

}

export default Toolbar;

//{items.map(item => <button data-name={item} onClick={evt => this.onSelectFilter(evt)} key={item}>{item}</button>)}