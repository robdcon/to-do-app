import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ToDoList.styles';

class ToDoList extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('ToDoList will mount');
  }

  componentDidMount = () => {
    console.log('ToDoList mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ToDoList will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ToDoList will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ToDoList did update');
  }

  componentWillUnmount = () => {
    console.log('ToDoList will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ToDoListWrapper">
        Test content
      </div>
    );
  }
}

ToDoList.propTypes = {
  // bla: PropTypes.string,
};

ToDoList.defaultProps = {
  // bla: 'test',
};

export default ToDoList;
