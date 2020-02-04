import React from 'react';
import ReactDOM from 'react-dom';
import ToDoContainer from './../ToDoContainer';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'

it("renders without crashing", () => {

    const div = document.createElement('div')
    ReactDOM.render(<ToDoContainer></ToDoContainer>, div);
    
})