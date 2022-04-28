import React from "react";
//import PropTypes from 'prop-types';
//import ShopItemModel from './models/ShopItemModel.js'

class ProjectList extends React.Component {

  render () {
    const {items} = this.props;
    
    return (
      <div className="projectList">
        {items.map((item, index) => <img src={item.img} alt={item.category} key={index}/>)}
      </div>
    );
  };

}

export default ProjectList;
