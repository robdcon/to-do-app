import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ToDoList.styles';

class ToDoList extends PureComponent { 
  constructor(props:{}) {
    super(props);

    this.state = {
      hasError: false,
      count:0
    };
  }

  render () {
    return (
      <div className="ToDoListWrapper">
        Test content
      </div>
    );
  }
}

export default ToDoList;
