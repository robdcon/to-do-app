import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';
import ToDoContainer from './components/ToDoContainer';
import ToDoList from './components/ToDoList';
import ToDo from './components/ToDo';
import {StyledApp} from './App.styles.js'


const initialToDoList: Array<ToDo> = []

const App: React.FC = () => {
  
  const [toDoList, setToDoList] = useState(initialToDoList)
  const [uniqueId, setUniqueId] = useState(0);

  // CREATE UNIQUE ID
  const getUniqueId = () => {

    const id = uniqueId + 1;
    setUniqueId(id)
    return id;

  }

  // ADD
  const addToDo: AddToDo = (newToDo) => {
   
    const id = getUniqueId();
    setToDoList([...toDoList, {id: id, text:newToDo, done:false}]);

    console.log('to do added');
  }

  //EDIT 
  const editToDo: EditToDo = selectedToDo => {

    const newToDos = toDoList.map((todo) => {
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
   
    setToDoList(newToDos);

  }
 
  // REMOVE
  const removeToDo: RemoveToDo = (selectedToDo) => {
    const modifiedList = toDoList.filter((todo)=>{
        return todo != selectedToDo;
    })
    setToDoList(modifiedList);

  }

  // TOGGLE DONE
  const toggleToDo: ToggleToDo = selectedToDo => {
    const newToDos= toDoList.map((todo) => {
        if(todo === selectedToDo) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo;
    })

    setToDoList(newToDos);

  }

  // CHECK FOR LOCAL STORAGE
  const checkLocalStorage = () =>
  {
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
  const saveToLocalStorage = () =>
  {
    if(checkLocalStorage() === true)
    {
      const list = {id:uniqueId, list: [...toDoList]};
      const jsonList = JSON.stringify(list)
      localStorage.setItem('to-do-list', jsonList);
      console.log('saved')
    }
      
  }
  
  useEffect(() => {
    saveToLocalStorage();
  })

  return (

    <StyledApp className="App">
     <ToDoList todos={toDoList} toggleToDo={toggleToDo} removeToDo={removeToDo} editToDo={editToDo} />
     <TextArea addToDo={addToDo}/>
    </StyledApp>
  );
}

export default App;
