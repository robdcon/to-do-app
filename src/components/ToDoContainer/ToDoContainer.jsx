import React, { PureComponent } from 'react';

//import { Test } from './ToDoContainer.styles';

class ToDoContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  
  componentDidMount = () => {
    console.log('ToDoContainer mounted');
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
        {this.props.children}
      </div>
    );
  }
}

export default ToDoContainer;
