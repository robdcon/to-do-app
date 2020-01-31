import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './../ToDoList';
import { render, cleanup, toBeInTheDocument } from '@testing-library/react';
import renderer from 'react-test-renderer'

const initialToDoList = [
    {text:"todo one", done:false, id: null},
    {text:"todo two",  done:false, id: null}
  ]

it("renders without crashing", () => {

    const ul = document.createElement('ul');
    ReactDOM.render(<ToDoList />, ul);
})

it("renders todo list component correctly", () => {
    const {getByTestId} = render(<ToDoList todos={initialToDoList} ></ToDoList>) 
   expect(getByTestId('test-todo-list'))
})
