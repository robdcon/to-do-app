import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';
import ToDoContainer from './components/ToDoContainer';
import ToDoList from './components/ToDoList';
import ToDo from './components/ToDo';

const initialToDoList: Array<ToDo> = [
  {text:"todo one", done:false, id: null},
  {text:"todo two",  done:false, id: null}
]

const App: React.FC = () => {
  
  const [toDoList, setToDoList] = useState(initialToDoList)

  const addToDo: AddToDo = (newToDo) => {
   
    setToDoList([...toDoList, {id: 0, text:newToDo, done:false}]);

    console.log('to do added');
  }

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

    <div className="App">
     <ToDoList todos={toDoList} toggleToDo={toggleToDo} removeToDo={removeToDo} />
     <TextArea addToDo={addToDo}/>
    </div>
  );
}

export default App;
