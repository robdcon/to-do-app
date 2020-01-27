import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './components/TextArea';

const App: React.FC = () => {
  return (
    <div className="App">
       <TextArea a={[{a:'a'},{b:'b'}]} o={{a:'test'}} i={1}  text="Hello World!!!" />
    </div>
  );
}

export default App;
