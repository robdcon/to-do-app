import React, { PureComponent } from 'react';
import { StyledContainer } from './ToDoContainer.styles';
import Button from '../Button';
import ToDo from '../ToDo';
import TextArea from '../TextArea';
import ToDoList from '../ToDoList';

const todos = [
  {text:"todo one", done:false, id: null},
  {text:"todo two",  done:false, id: null}
]


class ToDoContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      toDoList: [],
      uniqueId: 0
    };
  }

  getUniqueId = () => {
    const id = this.state.uniqueId;
    const newId = id + 1;
    this.setState({uniqueId: newId});
    return newId;
  }
  // Return a ToDo component referencing data from toDoLiost array in state
  displayToDo = (todo) => {

        return <ToDo key={todo.id} id={todo.id} text={todo.text} status={todo.status} />
  }

  // Reveal text input field by setting status in state
  showInput = () => {

    this.setState({
      newToDo: true
    })
  }

  // Create new ToDo object by revealing a text input field and passing its value in an object to addToDo()
  createToDo = () => {

  }

  // Add new dodo to array of todos in state, taking toDo object as parameter
  addToDo = (toDo) => {

    const uniqueID = this.getUniqueId();
    let newToDoList = [

      ...this.state.toDoList,
      {id: uniqueID, text:toDo.text, status: toDo.status}
     
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
        {/* {this.state.toDoList.map(this.displayToDo)} */}
        <ToDoList />
        <Button text="Click Me" handleClick={this.addToDo}/>
        <TextArea />
      </StyledContainer>
    );
  }
}

export default ToDoContainer;
