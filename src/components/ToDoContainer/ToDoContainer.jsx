import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ToDoContainer.styles';

class ToDoContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('ToDoContainer will mount');
  }

  componentDidMount = () => {
    console.log('ToDoContainer mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ToDoContainer will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ToDoContainer will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ToDoContainer did update');
  }

  componentWillUnmount = () => {
    console.log('ToDoContainer will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ToDoContainerWrapper">
        Test content
      </div>
    );
  }
}

ToDoContainer.propTypes = {
  // bla: PropTypes.string,
};

ToDoContainer.defaultProps = {
  // bla: 'test',
};

export default ToDoContainer;
