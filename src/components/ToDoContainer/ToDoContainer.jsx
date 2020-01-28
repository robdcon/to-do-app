import React, { PureComponent } from 'react';
import { StyledContainer } from './ToDoContainer.styles';
import Button from '../Button';
import ToDo from '../ToDo';

const toDoList = [

  {
    text: 'To Do One',
    status: 'done'
  },
  {
    text: 'To Do Two',
    status: 'pending'
  },
  {
    text: 'To Do Three',
    status: 'pending'
  },

]

class ToDoContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      toDoList: toDoList
    };
  }

  displayToDo = (todo) => {

        return <ToDo text={todo.text} status={todo.status} />
 
  }

  addToDo = () => {

    let newToDoList = [

      ...this.state.toDoList,
      {text:'New To Do', status: 'pending'}

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
