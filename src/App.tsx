import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';
import ToDoContainer from './components/ToDoContainer';
import Button from './components/Button';
import ToDo from './components/ToDo';

const toDoList: Array<ToDo> = [

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

const App: React.FC = () => {
  return (
    <div className="App">
      <ToDoContainer>
        {
          toDoList.map((todo) => {

            return <ToDo text={todo.text} status={todo.status} />

          })
        }
        <Button text="Click Me" handleClick={() => console.log('Hello World!!!')}/>
      </ToDoContainer>
    </div>
  );
}

export default App;
