import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './../ToDo';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'

afterEach(cleanup);

const testToDo = {
    id:0,
    text:'test to do one',
    done:false
}

const testToDoDone = {
   todo: {
    id:1,
    text:'test to do two',
    done:true
   }
}

it("renders ToDo without crashing", () => {

    const div = document.createElement('div')
    ReactDOM.render(<ToDo todo={testToDo}  />, div)
})

it("renders ToDo correctly", () => {

    const {getByTestId} = render(<ToDo todo={testToDo} ></ToDo>)
    expect(getByTestId('test-todo')).toHaveTextContent("test to do one")
})

// it("displays correctly when marked done", () => {
    
//     const div = document.createElement('div');
//     ReactDOM.render(<ToDo todo={testToDoDone}></ToDo>, div);

//     const toDoClass = ToDo().type.styledComponentId;
//     const toDoInstance = document.getElementsByClassName(toDoClass)[0];
//     const style = window.getComputedStyle(toDoInstance);
//     expect(style.textDecoration).toBe('line-through');

// })
