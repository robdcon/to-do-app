import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';
import ToDoContainer from './components/ToDoContainer';
import Button from './components/Button';
import ToDo from './components/ToDo';

const App: React.FC = () => {
  return (
    <div className="App">
      <ToDoContainer>
        <ToDo text="To Do One" status="pending"/>
        <Button text="Click Me" handleClick={() => console.log('Hello World!!!')}/>
      </ToDoContainer>
    </div>
  );
}

export default App;
