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

// test("renders ToDoList without crashing", ({todos}) => {

//     const div = document.createElement('div'); 
//     ReactDOM.render(<ToDoList todos={initialToDoList} />, div)


// })

// it("renders ToDoList component correctly", () => {
//     const {getByTestId} = render(<ToDoList todos={initialToDoList} ></ToDoList>) 
//    expect(getByTestId('test-todo-list')).toBe()
// })
