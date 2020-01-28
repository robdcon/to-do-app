import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';
import ToDoContainer from './components/ToDoContainer';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <ToDoContainer>
        <Button text="Click Me" handleClick={() => console.log('Hello World!!!')}/>
      </ToDoContainer>
    </div>
  );
}

export default App;
