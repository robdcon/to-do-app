import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';

const App: React.FC = () => {
  return (
    <div className="App">
    <TextArea text='hello world!!!' />
    </div>
  );
}

export default App;
