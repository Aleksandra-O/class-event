import React from "react";
import { Component } from "react";
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';
import portfolioItems from './mock/portfolioItems.js';
import filters from './mock/filters';

class Porfolio extends Component {

  state = {
    items: portfolioItems,
    selected: 'All'
  }

  onClick= (evt) => {
    let currentFilter = evt.target.getAttribute('data-name');
    return currentFilter;
  }

  onSelect = (evt) => {
    const currentItems = portfolioItems;
    const currentFilter = this.onClick(evt);
    (currentFilter !== "All" ? this.setState(prevState => ({items: currentItems.filter(item => item.category === currentFilter), selected: currentFilter})) : this.setState(prevState => ({items: portfolioItems, selected: 'All'})));
    
  };

  render () {

    const {items} = this.state;
    const selected = this.state.selected;

    return (
      <div className="container">
        <Toolbar items = {filters} selected = {selected} onSelectFilter = {this.onSelect}/>
        <ProjectList items = {items} />
      </div>
    );
  };

}

export default Porfolio;
