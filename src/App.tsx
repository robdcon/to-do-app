import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';
import ToDoContainer from './components/ToDoContainer';
import ToDoList from './components/ToDoList';
import ToDo from './components/ToDo';
import {StyledApp} from './App.styles.js'

const initialToDoList: Array<ToDo> = [
  {text:"todo one", done:false, id: 1},
  {text:"todo two",  done:false, id: 2}
]

const App: React.FC = () => {
  
  const [toDoList, setToDoList] = useState(initialToDoList)

  // ADD
  const addToDo: AddToDo = (newToDo) => {
   
    setToDoList([...toDoList, {id: 0, text:newToDo, done:false}]);

    console.log('to do added');
  }

  //EDIT 
  const editToDo: EditToDo = selectedToDo => {
  
    console.log("SELECTED:",selectedToDo.text)
  
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
    console.log(newToDos)

    setToDoList(newToDos);

  }
  // const editToDo: EditToDo = (newToDo) => {
  
  //   const newToDoList = toDoList.filter((todo)=>{
  //     console.log(newToDo)
  //       if(todo.id === newToDo.id){
  //         console.log(todo)
  //         todo.text = newToDo.text
  //         return todo
  //       }
  //       return todo
  //   })

  //   console.log("NEW: ", newToDoList)
    
  //   setToDoList(newToDoList);

  //   console.log('to do added');
  // }

  // REMOVE
  const removeToDo: RemoveToDo = (selectedToDo) => {
    const modifiedList = toDoList.filter((todo)=>{
        return todo != selectedToDo;
    })
    setToDoList(modifiedList);

    console.log('to do removed');
  }

  const toggleToDo: ToggleToDo = selectedToDo => {
  
    console.log('done')
    
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

  return (

    <StyledApp className="App">
     <ToDoList todos={toDoList} toggleToDo={toggleToDo} removeToDo={removeToDo} editToDo={editToDo} />
     <TextArea addToDo={addToDo}/>
    </StyledApp>
  );
}

export default App;
