import React, { PureComponent } from 'react';
import { StyledContainer } from './ToDoContainer.styles';
import Button from '../Button';
import ToDo from '../ToDo';

class ToDoContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      toDoList: [],
      uniqueId: 0
    };
  }

  getUniqueId = () =>
  {
    const id = this.state.uniqueId;
    const newId = id + 1;
    this.setState({uniqueId: newId});
    return newId;
  }

  displayToDo = (todo) => {

        return <ToDo key={todo.id} id={todo.id} text={todo.text} status={todo.status} />
  }

  addToDo = (textInput) => {

    const uniqueID = this.getUniqueId();
    let newToDoList = [

      ...this.state.toDoList,
      {id: uniqueID, text:"new to do", status: 'pending'}
     
    ]

    this.setState({
      toDoList: newToDoList
    })

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
      <StyledContainer className="ToDoContainerWrapper">
        {this.state.toDoList.map(this.displayToDo)}
        <Button text="Click Me" handleClick={this.addToDo}/>
      </StyledContainer>
    );
  }
}

export default ToDoContainer;
