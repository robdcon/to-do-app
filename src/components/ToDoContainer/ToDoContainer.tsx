import React, { Component, useState, useEffect, createContext, useMemo, useCallback, useContext } from 'react';
import TextArea from '../TextArea';
import ToDoList from '../ToDoList';
import ToDo from '../ToDo';
import {StyledToDoContainer} from './ToDoContainer.styles.js';

interface LocalToDoList {
  id: number
  list: Array<ToDo>
}

interface initialProps {
  uniqueId: number
  toDoList: Array<ToDo>
}
// KEY FOR STORING AND RETRIEVING LIST FROM LOCAL STORAGE
const localToDoListKey = "to-do-list";

type AppState = {
  toDoList:Array<ToDo>
  uniqueId: number
}

const initialToDoList = [
  {id:1, text:'one', done:false},
  {id:2, text:'two', done:false}
]


   ///////////////////////////////\
  ///   ORIGINAL APP SET UP   ///  \
 ///////////////////////////////____\

class App extends Component<{}, AppState> {

  constructor(props: initialProps) { 
    super(props);
    this.state = {
      uniqueId:0,
      toDoList:[]
    }
  }

  // CREATE UNIQUE ID
  getUniqueId = () => {

    const id = this.state.uniqueId + 1;
    this.setState({uniqueId:id});
    return id;

  }

  // ADD
  addToDo: AddToDo = (newToDo) => {
   
    if(newToDo) {
      const id = this.getUniqueId();
      this.setState({toDoList:[...this.state.toDoList, {id: id, text:newToDo, done:false}]});
    }
    
  }

  //EDIT 
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
 
  // REMOVE
  removeToDo: RemoveToDo = (selectedToDo) => {
    const modifiedList = this.state.toDoList.filter((todo)=> {
        return todo != selectedToDo;
    })
    this.setState({toDoList:modifiedList});

  }

  // TOGGLE DONE
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

   /////////////////////////\
  ///   ACCESSIBILITY   ///  \
 /////////////////////////____\

  handleFocus(e:KeyboardEvent) {
      
    e = e || window.event;
    let direction;
    switch(e.which || e.keyCode) {
      case 37: // left
        direction = 'LEFT';
      break;

      case 38: // up
        direction = 'UP';
      break;

      case 39: // right
        direction = 'RIGHT';
      break;

      case 40: // down
        direction = 'DOWN';
      break;

      case 13: // down
        direction = 'ENTER';
      break;

      default: return; // exit this handler for other keys
    }

      console.log(direction)


  }

  // CHECK FOR LOCAL STORAGE
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

  // SAVE LIST TO LOCAL STORAGE
  saveToLocalStorage = () => {
    if(this.checkLocalStorage() === true)
    {
      const list = {id:this.state.uniqueId, list: [...this.state.toDoList]};
      const jsonList = JSON.stringify(list)
      localStorage.setItem(`${localToDoListKey}`, jsonList);
      console.log('saved')
    }
      
  }
  
  // FIRST RENDER
  componentDidMount() {

    const storedList = localStorage.getItem(`${localToDoListKey}`) || '';
   
    if(storedList) {
      let initialList: LocalToDoList = JSON.parse(storedList);
      this.setState({toDoList:initialList.list, uniqueId:initialList.id});
    }
   
    console.log('Component Mounted')
  }

  // SAVE TO LOCAL ON EACH MODIFICATION
  componentDidUpdate() {

    this.saveToLocalStorage();
    console.log('Component Updated')
  }


  componentWillUnmount() {
   
    console.log('Componernt Unmounted')
  }

  render() {
    return (
     
      <StyledToDoContainer className="App">
        <ToDoList >
        {
          this.state.toDoList.map((todo) => {
            return (
            <li key={`${todo.id}`}>
              <ToDo
                todo={todo} 
                toggleToDo={this.toggleToDo} 
                removeToDo={this.removeToDo} 
                editToDo={this.editToDo}
              />
            </li>)
          })
        }
        </ToDoList>
        <TextArea addToDo={this.addToDo}/>
      </StyledToDoContainer>
    );
  }
}

export default App;
