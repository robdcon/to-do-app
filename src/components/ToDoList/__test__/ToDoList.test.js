import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './../ToDoList';
import { render, cleanup, toBeInTheDocument } from '@testing-library/react';
import renderer from 'react-test-renderer'

// CHANGE TIMEOUT TO AVOID ERROR
//jest.setTimeout(60000); // Not Working

afterEach(cleanup);

it("renders ToDoList without crashing", () => {

    const div = document.createElement('div')
    render(<ToDoList></ToDoList>, div)
})

const initialToDoList = [
    {text:"todo one", done:false, id: 0},
    {text:"todo two",  done:true, id: 1}
  ]

test("renders ToDoList ul without crashing", () => {

    const div = document.createElement('div'); 
    const {getByTestId} = render(<ToDoList />, div);
    expect (getByTestId('test-todo-list')).toBeTruthy()
})

