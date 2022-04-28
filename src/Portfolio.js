import React from "react";
import { Component } from "react";
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';
import portfolioItems from './mock/portfolioItems.js';
import filters from './mock/filters';

class Porfolio extends Component {

  state = {
    items: portfolioItems
  }

  onSelect = (filter) => {
    this.setState (prevState => ({items: prevState.items.map(item => {
      if (item.category === filter) {
        return item;
      }
      return item;
    })}));
  };

  render () {

    const {items} = this.state;

    return (
      <div className="container">
        <Toolbar items = {filters} selected = {'Flayers'} onSelectFilter = {this.onSelect}/>
        <ProjectList items = {items} />
      </div>
    );
  };

}

export default Porfolio;

//let filter = evt.target.getAttribute('data-name');
//<Toolbar items = {filters} selected = {1} onSelectFilter = {this.onSelect}/>
