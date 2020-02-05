import React, { Component } from 'react';
import TextArea from '../TextArea';
import ToDoList from '../ToDoList';
import ToDo from '../ToDo';
import {StyledToDoContainer} from './ToDoContainer.styles.js';

const testToDoList = [
  {
      id:0,
      text:'test to do one',
      done:false
  },
  {
      id:1,
      text:'test to do two',
      done:false
  }
]

interface LocalToDoList {
  id: number
  list: Array<ToDo>
}

interface initialProps {
  uniqueId: number
  toDoList: Array<ToDo>
}

// Define a key for persistence to local storage
const localToDoListKey = "to-do-list";

type InitialState = {
  toDoList:Array<ToDo>
  uniqueId: number
}


class ToDoContainer extends Component<{}, InitialState> {

  constructor(props: initialProps) { 
    super(props);
    this.state = {
      uniqueId:0,
      toDoList:[]
    }
  }

  // Create unique ID each ToDo
  getUniqueId = () => {

    const id = this.state.uniqueId + 1;
    this.setState({uniqueId:id});
    return id;

  }

  // Add new ToDo to the array of ToDos
  addToDo: AddToDo = (newToDo) => {
   
    if(newToDo) {
      const id = this.getUniqueId();
      this.setState({toDoList:[...this.state.toDoList, {id: id, text:newToDo, done:false}]});
    }
    
  }

  // Return modified list with new text for selected ToDo
  editToDo: EditToDo = selectedToDo => {

    const newToDoList = this.state.toDoList.map((todo) => {
      console.log(todo.id)
        if(todo.id === selectedToDo.id) {
          console.log('found')
          return {
            ...todo,
            text: selectedToDo.text   
          }
        }
        return todo;
    })
   
    this.setState({toDoList:newToDoList});

  }
 
  // Remove ToDo using filter
  removeToDo: RemoveToDo = (selectedToDo) => {
    const modifiedList = this.state.toDoList.filter((todo)=> {
        return todo != selectedToDo;
    })
    this.setState({toDoList:modifiedList});

  }

  // Toggle done and apply appropriate styles
  toggleToDo: ToggleToDo = selectedToDo => {
    const newToDoList= this.state.toDoList.map((todo) => {
        if(todo === selectedToDo) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo;
    })

    this.setState({toDoList:newToDoList});

  }


  // Check if local storage is enabled
  checkLocalStorage() {

      if (typeof localStorage !== 'undefined') {
          try {
              localStorage.setItem('feature_test', 'yes');
              if (localStorage.getItem('feature_test') === 'yes') {
                  localStorage.removeItem('feature_test');
                  // localStorage is enabled
                  console.log('Local Enabled')
                  return true
              } else {
                  // localStorage is disabled
                  console.log('Local Disabled')
                  return false
              }
          } catch(e) {
              // localStorage is disabled
              console.log('Local Disabled', e)
              return false
          }
      } else {
          // localStorage is not available
          console.log('Local Not Available')
          return false
      }
  }

  // Save the list to local storage
  saveToLocalStorage = () => {
    if(this.checkLocalStorage() === true)
    {
      const list = {id:this.state.uniqueId, list: [...this.state.toDoList]};
      const jsonList = JSON.stringify(list)
      localStorage.setItem(`${localToDoListKey}`, jsonList);
      console.log('saved')
    }
      
  }
  
  componentDidMount() {
    // Check for a list in local storage
    const storedList = localStorage.getItem(`${localToDoListKey}`) || '';
   
    if(storedList) {
      let initialList: LocalToDoList = JSON.parse(storedList);
      this.setState({toDoList:initialList.list, uniqueId:initialList.id});
    }
   
    console.log('Component Mounted')
  }

  // Persist the data after each update
  componentDidUpdate() {

    this.saveToLocalStorage();
    console.log('Component Updated')
  }

  render() {
    return (
     
      <StyledToDoContainer className="App">
        <ToDoList >
        { 
           ( !this.state.toDoList || this.state.toDoList.length === 0) ? (

            <li><p>Nothing To Do!</p></li>

           ) : ( 
            this.state.toDoList.map((todo) => {
            return (
            <li key={`${todo.id}`} data-testid="todo-list-li">
              <ToDo
                todo={todo} 
                toggleToDo={this.toggleToDo} 
                removeToDo={this.removeToDo} 
                editToDo={this.editToDo}
              />
            </li>)
          }) )
        }
        </ToDoList>
        <TextArea addToDo={this.addToDo}/>
      </StyledToDoContainer>
    );
  }
}

export default ToDoContainer;
